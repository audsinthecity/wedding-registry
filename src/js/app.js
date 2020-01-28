App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load registry items.
    $.getJSON('../items.json', function(data) {
      var itemsRow = $('#itemsRow');
      var itemTemplate = $('#itemTemplate');

      for (i = 0; i < data.length; i ++) {
        itemTemplate.find('.panel-title').text(data[i].name);
        itemTemplate.find('img').attr('src', data[i].picture);
        itemTemplate.find('.item-store').text(data[i].store);
        itemTemplate.find('.btn-claim').attr('data-id', data[i].id);

        itemsRow.append(itemTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
    // Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
}
web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Registry.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var RegistryArtifact = data;
      App.contracts.Registry = TruffleContract(RegistryArtifact);
    
      // Set the provider for our contract
      App.contracts.Registry.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the funded projects
      return App.markClaimed();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-claim', App.handleClaim);
  },

  markClaimed: function(guests, account) {
    var claimingInstance;

App.contracts.Registry.deployed().then(function(instance) {
  claimingInstance = instance;

  return claimingInstance.getGuests.call();
}).then(function(guests) {
  for (i = 0; i < guests.length; i++) {
    if (guests[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-item').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleClaim: function(event) {
    event.preventDefault();

    var itemId = parseInt($(event.target).data('id'));

    var claimingInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Registry.deployed().then(function(instance) {
    claimingInstance = instance;

    // Execute claiming as a transaction by sending account
    return claimingInstance.claim(itemId, {from: account});
  }).then(function(result) {
    return App.markClaimed();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
