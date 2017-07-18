$(document).ready(function() {

  //-----------------------------VARIABLES------------------------------//

  var isConnected = false;

  //-----------------------------FUNCTIONS------------------------------//



  // VALIDE ET CONNECTE l'UTILISATEUR
  var clickLogInEvent = function() {

    var password = $(".js-password").val();
    var courriel = $(".js-courriel").val();

    if (password == "foo" && courriel == "foo") {
      isConnected = true;
      $.mobile.navigate("#page1");
      $(".js-connectionBtnText").text("Déconnection");
    } else {
      $(".js-wrongLogPopup").popup("open");
    }

  };

    // DECONNECTE L'UTILISATEUR
  var clickLogoutEvent = function() {
    if (isConnected == true) {
      isConnected = false;
      $(".js-connectionBtnText").text("Se connecter");
      return false;
    }

  };

  // VERIFIE SI UTILISATEUR EST CONNECTE AVANT D'ALLER AU PANIER
  var clickGoToCartEvent = function() {
    if (isConnected == false) {
      $(".js-notConPopup").popup("open");
      return false;
    }

  };

  // VERIFIE SI CONNECTE AVANT D'ACHETER & ADD TO CART
  var clickToBuyEvent = function() {
    if (isConnected == false) {
      $(".js-notConBuy").popup("open");
      return false;
    } else {
      $(".js-successBuy").popup("open");
      $(".js-listePanier").append($(this).data("test") + "<br>");
    }

  };

  // VIDE LE PANIER
  var clickToEmptyCartEvent = function() {
    $(".js-listePanier").empty();
    
  };

  //-----------------------------TRIGGERS------------------------------//

  // VALIDE ET CONNECTE l'UTILISATEUR
  $(".js-loginSubmit").click(clickLogInEvent);

  // DECONNECTE L'UTILISATEUR
  $(".js-logout").click(clickLogoutEvent);

  // VERIFIE SI UTILISATEUR EST CONNECTE AVANT D'ALLER AU PANIER
  $(".js-panierAchat").click(clickGoToCartEvent);

  // VERIFIE SI CONNECTE AVANT D'ACHETER & ADD TO CART
  $(".js-buyBtn").click(clickToBuyEvent);

  // VIDE LE PANIER
  $(".js-clearCartBtn").click(clickToEmptyCartEvent);

  //---------------------DECLARATION DES POPUPS------------------------//

  $(".js-errPopup, .js-successPopup").popup();

});
