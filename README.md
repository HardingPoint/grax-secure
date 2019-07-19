# grax-secure-executable

To deploy to a new Heroku instance:
- Create a new Heroku app
- In Heroku Settings tab, remove NodeJS if it is listed as a buildpack.
- Click "Add buildpack", and fill in the following under "Enter Buildpack URL", then click "Save changes": https://github.com/peterkeen/heroku-buildpack-vendorbinaries
- In "Deploy" tab, connect this `grax-secure-executable` repository and deploy the master branch.
