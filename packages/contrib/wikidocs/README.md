README: wikidocs

##Installation

`mean install wikidocs`

By default it going to #!/wikidocs/ will render the github markdown 
from the mean wiki in html and uses navigation.md to generate the menu on the side.

By changing the config file eg config/env/development.js to "wikidocsRepo" : <user>/<project>/ you will get generate those docs.

Please not by default it tries to reneder the navigation from navigation.md and the main content from Getting-Started.

you can change default config with "wikidocsDefault":"<page>"
