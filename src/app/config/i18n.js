import { app } from '../module';

i18nConfig.$inject = ['$translateProvider', 'i18nProvider', 'momentPickerProvider'];
function i18nConfig($translateProvider, i18n, momentPickerProvider) {
    var initialLocale = 'es';
    
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    
    $translateProvider.preferredLanguage(initialLocale);

    $translateProvider.useUrlLoader('/i18n/');

    i18n.$get().changeLocale(initialLocale);
    momentPickerProvider.options({locale: initialLocale});
    window.moment.locale(initialLocale);
    window.moment.tz.setDefault('Europe/Madrid');

}
app.config(i18nConfig);