import $ from 'jquery';
import pluginInfo from './pluginInfo'
import QuestionaireModalView from './views/questionaireModalView'
import helper from './views/i18n'

george.app.module('plugins.PI-TRANSACTION-BUTTON', {

      define: function(testApp) {

        george.app.addInitializer(function () {

          var btnTranslation = i18.t(pluginInfo.name + ":transactionItemButton");

          george.app.hooks.register("transaction:rendered", function(params) {

              var view = params.transactionView;

              var model = view.model;

              var hasUtilityBill = model.attributes.categories.some((item) => {

                  return item.subCategory == 'UTILITY_BILLS'

              });

              // if (!hasUtilityBill){
              //   return;
              // }

              // console.log('got UTILITY_BILLS');

              // view.$('.transaction-icons').append('<span class="clickOnMe btn btn-lg btn-default clickable">' + btnTranslation + '</span>');

              var chunk = `<span class="clickOnMe btn btn-lg btn-default clickable" title="` + btnTranslation + `">
              <svg class="ico-star ic-md"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-star"></use></svg>
              </span>`

              view.$('.transaction-icons').append(chunk);


              view.$('.clickOnMe').click(function(e) {

                  e.preventDefault(); e.stopPropagation();

                  console.log('clicked');

                  var questionaire = new QuestionaireModalView({
                     // pass arguments to options
                   });

                  //Attaches the view into the Region of the Modal
                  george.app.mainModalRegion.show(questionaire);

                  //Function to actualy show the Modal
                  george.ui.showViewModal('', null, null, true, 'g-bootstrap g-modal');

              });

              // try to find UTILITY_BILLS subCateogry

              view.model.attributes.categories
                .forEach((item) => {
                  console.log(item.mainCategory + ' ' + item.subCategory);
                });


              // console.log(params.transactionView.model.attributes.categories);

            });

        });

    }
});
