(function () {
    'use strict';

    angular.module('app')
        .config(function ($mdThemingProvider, $mdIconProvider, ngMdIconServiceProvider) {

            $mdIconProvider
                .defaultIconSet("./content/svg/avatars.svg", 128)
                .icon("menu", "./content/svg/menu.svg", 24)
                .icon("share", "./content/svg/share.svg", 24)
                .icon("google_plus", "./content/svg/google_plus.svg", 512)
                .icon("hangouts", "./content/svg/hangouts.svg", 512)
                .icon("twitter", "./content/svg/twitter.svg", 512)
                .icon("phone", "./content/svg/phone.svg", 512);



            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red');

            ngMdIconServiceProvider        
            // Get an existing icon
                .addShape('dice', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z" /></svg>')
                .addShape('inventory', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M0 0h512v512H0z" fill="transparent" stroke="#050000" stroke-width="0"></path><path d="M186.438 20.56l-13.184 26.365c6.8-.26 13.626-.488 20.47-.686l3.84-7.68h116.874l3.77 7.54c6.838.187 13.658.408 20.456.66l-13.102-26.2H186.437zm69.56 42.742c-45.757.056-91.452 1.566-135.38 4.363-3.24 50.58-8.4 100.987-.786 145.824 89.297 12.395 180.102 12.985 272.764-.054 7.055-30.988 5.117-84.68-1.04-145.89-43.974-2.893-89.73-4.3-135.558-4.244zm153.783 5.54c6.42 64.12 9.113 119.825-1.135 155.22l-1.61 5.56-5.726.842c-98.8 14.528-195.613 13.81-290.605.002l-6.285-.914-1.246-6.23c-9.89-49.49-4.085-102.785-.664-154.42-4.89.354-9.765.72-14.602 1.107-8.596 58.568-9.39 116.957-.05 175.292 110.24 12.088 222.275 12.205 336.203-.01 8.502-57.83 8.29-116.25-.017-175.313-4.725-.4-9.485-.776-14.262-1.14zM255.966 92.3c32.526-.025 65.067 2.746 97.574 8.39l7.46 1.295v7.572c0 15.554 1.683 35.105-12.69 50.25-9.912 10.444-25.655 17.337-51.31 20.585v18.164h-82v-18.452c-23.992-3.37-39.352-10.175-49.363-20.185C150.807 145.093 151 125.56 151 109.56v-7.594l7.484-1.278c32.444-5.54 64.955-8.362 97.48-8.386zm.012 17.994c-28.96.022-57.913 2.444-86.858 6.996.265 12.28 1.635 22.296 9.243 29.904 5.914 5.914 16.952 11.416 36.637 14.582v-29.22h82v29.51c21.367-3.115 32.66-8.755 38.254-14.65 7.033-7.41 7.696-17.502 7.73-30.124-29-4.63-58.006-7.02-87.007-6.998zM233 150.56v30h46v-30h-46zm209.674 92.42c-.503 3.625-1.042 7.25-1.61 10.87.214 2.352.42 4.706.63 7.06L471 290.213v-22.24l-28.326-24.995zm-373.485.12L41 267.973v22.24l29.318-29.318c.205-2.327.406-4.655.616-6.982-.618-3.605-1.202-7.21-1.745-10.813zm354.634 20.397c-10.29 1.09-20.564 2.076-30.824 2.967v74.095h16v66h-16v80.615c10.318-.633 20.63-1.313 30.928-2.082 9.445-74.01 6.478-147.698-.104-221.596zm-335.576.03C81.725 338.09 78.58 412.1 88.06 485.1c10.324.79 20.638 1.504 30.94 2.145V406.56h-16v-66h16v-74.024c-10.266-.902-20.517-1.903-30.752-3.01zm286.752 4.4c-10.014.76-20.014 1.424-30 1.992v70.64h30v-72.632zm-238 .085v72.547h30v-70.55c-10.015-.568-20.014-1.237-30-1.997zm190 2.825c-47.65 2.173-94.984 2.19-142 .078v19.314c23.95-5.165 47.8-7.652 71.516-7.59 23.638.06 47.145 2.654 70.484 7.626v-19.43zM68.05 288.62L41 315.67v56.89h23.06c.376-27.987 1.88-55.975 3.99-83.94zm375.948.047c2.12 27.872 3.61 55.83 3.957 83.892H471v-56.89l-27.002-27.003zm-187.52 11.95c-23.68-.063-47.487 2.577-71.478 8.052v31.89h16v18.443c17.033 5.346 31.73 8.493 46 9.426v-2.87h18v2.868c14.27-.932 28.967-4.08 46-9.425V340.56h16v-31.866c-23.42-5.267-46.907-8.016-70.523-8.078zM121 358.558v30h22v-23h18v23h22v-30h-62zm208 0v30h22v-23h18v23h22v-30h-62zM201 377.8v28.76h-16v15.857c48.528 10.865 95.713 10.664 142 .045V406.56h-16V377.8c-16.332 4.747-31.283 7.52-46 8.326v11.433h-18v-11.434c-14.717-.806-29.668-3.58-46-8.326zM41 390.56v14h23.14c-.09-4.667-.143-9.334-.163-14H41zm407.012 0c-.027 4.663-.083 9.33-.18 14H471v-14h-22.988zM137 406.56v19.798c6.137 7.214 11.222 9.77 14.934 9.844 3.734.075 8.697-2.122 15.066-9.79V406.56h-6v7h-18v-7h-6zm208 0v19.798c6.137 7.214 11.222 9.77 14.934 9.844 3.734.075 8.697-2.122 15.066-9.79V406.56h-6v7h-18v-7h-6zm-304 16v35.154c5.596 5.51 8.677 8.25 11.846 9.306 2.454.818 7.713 1.15 15.045 1.317-1.544-15.25-2.586-30.51-3.204-45.778H41zm406.27 0c-.628 15.224-1.674 30.483-3.21 45.78 7.358-.168 12.635-.5 15.094-1.32 3.17-1.056 6.25-3.795 11.846-9.306V422.56h-23.73zM185 440.842v49.498c47.55 1.51 94.877 1.446 142-.074V440.9c-46.316 10.03-93.74 10.185-142-.057zm-48 9.123v38.318c10.01.54 20.01 1.008 30 1.408v-39.678c-4.86 2.786-10.01 4.293-15.43 4.184-5.192-.104-10.036-1.624-14.57-4.232zm208 0v39.654c10.01-.403 20.01-.878 30-1.412v-38.194c-4.86 2.786-10.01 4.293-15.43 4.184-5.192-.104-10.036-1.624-14.57-4.232z"></path></svg>')
                .addShape('weight', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M0 0h512v512H0z" fill="transparent" stroke="#050000" stroke-width="0"></path><path fill="#060000" d="M256 46c-45.074 0-82 36.926-82 82 0 25.812 12.123 48.936 30.938 64H128L32 480h448l-96-288h-76.938C325.877 176.936 338 153.812 338 128c0-45.074-36.926-82-82-82zm0 36c25.618 0 46 20.382 46 46s-20.382 46-46 46-46-20.382-46-46 20.382-46 46-46zm-82.215 202.95h23.5v33.263l33.873-33.264h27.283l-43.883 43.15 48.4 47.974H233.54l-36.255-35.888v35.888h-23.5V284.95zm119.934 21.24c4.76 0 8.952.934 12.573 2.806 3.62 1.872 6.938 4.82 9.95 8.85v-10.13h21.972v61.462c0 10.986-3.48 19.368-10.438 25.146-6.917 5.82-16.968 8.727-30.152 8.727-4.272 0-8.4-.325-12.39-.976-3.986-.65-7.996-1.647-12.024-2.99v-17.03c3.826 2.198 7.57 3.826 11.23 4.884 3.664 1.098 7.347 1.648 11.05 1.648 7.162 0 12.41-1.566 15.746-4.7 3.337-3.132 5.006-8.035 5.006-14.708v-4.7c-3.01 3.986-6.328 6.916-9.95 8.788-3.62 1.87-7.813 2.808-12.573 2.808-8.343 0-15.238-3.275-20.69-9.826-5.453-6.592-8.18-14.974-8.18-25.146 0-10.214 2.727-18.576 8.18-25.086 5.452-6.55 12.347-9.827 20.69-9.827zm8.118 15.746c-4.517 0-8.038 1.67-10.56 5.005-2.523 3.338-3.784 8.058-3.784 14.162 0 6.266 1.22 11.026 3.662 14.28 2.442 3.215 6.003 4.823 10.682 4.823 4.557 0 8.096-1.67 10.62-5.006 2.522-3.337 3.784-8.036 3.784-14.098 0-6.104-1.262-10.824-3.785-14.16-2.523-3.337-6.062-5.006-10.62-5.006z"></path></svg>');
        });
})();