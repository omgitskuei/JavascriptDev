You can install ESLint using npm - "--save-dev" means installing the module only for the dev testing env
npm install eslint --save-dev

If you get an error "self signed certificate in certificate chain" when installing ESLint ^, use cmd
npm config set strict-ssl false --global
then do the install, and then TURN IT BACK TO TRUE
npm config set strict-ssl true --global