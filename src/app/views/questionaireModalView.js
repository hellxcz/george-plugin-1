// define([
//     'jquery',
//     'underscore',
//     'backbone',
//     'marionette',
//     'text!../templates/questionnaireModal.ejs'
// ],

import Marionette from 'marionette';
import template from './questionaireModal.hbs'
// import _ from 'lodash';

import pluginInfo from '../pluginInfo'

export default Marionette.ItemView.extend({
      events: {
          "click @ui.cancelBtn": "closeModal",
          "click @ui.sendEmailBtn": "sendEmail",
      },
      ui: {
          sendEmailBtn: ".ctrl-send-email",
          cancelBtn: ".ctrl-cancel"
      },
      // getTemplate: function () {
      //     return _.template(template);
      // },
      template: template,
      templateHelpers: function () {

          var profile = george.current.profile;

          var i18root = pluginInfo.name + ':questionaireModal.';

          return {
              firstName: profile.get('firstname'),
              lastName: profile.get('lastname'),
              i18root: i18root
          };
      },
      initialize: function (options) {
          // this.errorTitle = options.errorTitle ? options.errorTitle : i18.t("PI-CUSTSAFE:scanErrorModal.errorTitle_serviceUnavailable");
          // this.errorDescription = options.errorDescription ? options.errorDescription : i18.t("PI-CUSTSAFE:scanErrorModal.errorDescription_serviceUnavailable");
          // this.showDownloadBtn = options.showDownloadBtn ? options.showDownloadBtn : false;
      },
      onRender: function () {

      },
      closeModal: function () {
          george.ui.closeModal();
      },

      sendEmail: function() {

          alert('sending email');

          george.ui.closeModal();

      }

  });
