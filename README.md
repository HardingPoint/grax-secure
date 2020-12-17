# grax-secure

To deploy to a new Heroku instance:
- Create a new Heroku app
- In Heroku Settings tab, remove NodeJS if it is listed as a buildpack.
- Click "Add buildpack", and fill in the following under "Enter Buildpack URL", then click "Save changes": https://github.com/HardingPoint/heroku-buildpack-vendorbinaries
- In "Deploy" tab, connect this `grax-secure` repository and deploy the master branch.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy/?template=https://github.com/HardingPoint/grax-secure/tree/master)
