### Movies Dashboard on NodeJS

This NodeJS application will allow you to use the buttons on `main.html` to fetch various different movies, directors, or artists in JSON format. The goal behind fetching this data is to manually generate traffic between each of the services hosting this data. 

The movies service (`movies.js`) contains a small set of movies. 
The directors service (`directors.js`) contains a small set of directors. 
The artist service (`artist.js`) contains a small set of artists. 

All of these NodeJS applications have been instrumented with the Splunk Distribution of OpenTelemetry JS. 

The goal of this application is to understand just how easy it is to manually instrument your application programmatically with the Splunk Distribution of OpenTelemetry JS. 

## How do I get started?

With NodeJS installed on your host machine, run the `run-dash-codeOTEL.sh` to start all of the NodeJS services (movies, directors, and artists services). This will use node to run each of the services on various ports on your machine. 

#### Manually generate data.

To manually generate data open `main.html` with any browser and click one of the buttons. This will fetch a list of either Movies, Actors, or Directors from the respective running services in JSON format within the present iFrame on the page. This will result in generating application telemetry to be collected by the Splunk OpenTelemetry Collector. Be sure to click at least each button once to collect data from each service. 

#### Generate data repeatedly.

Bash scripts have been provided which can be ran on a remote machine or the host machine running each service. Be sure to change the URL of the curl command. 

For example, if the host machine running each of the node services is equal to 1.1.1.1, then each of the bash scripts should be modified as shown in the examples below and ran on a remote machine. 

curl-actors.sh:

`while true; do curl http://1.1.1.1/actors; sleep 5; done`

curl-directors.sh:

`while true; do curl http://1.1.1.1/directors; sleep 5; done`

curl-movies.sh

`while true; do curl http://1.1.1.1/movies; sleep 5; done`

Modify each script accordingly to reflect `localhost` if you are generating data repeatedly on the host machine running each of the services. 

#### Collecting application telemetry.

To collect application telemetry use the Splunk Distribution of the OpenTelemetry Collector. Visit https://docs.splunk.com/Observability/gdi/opentelemetry/install-the-collector.html#otel-install-platform for more information. 

#### How to view my application telemetry.

Try Splunk Observability Cloud. A free trial is avaliable at https://www.splunk.com/en_us/observability/o11y-cloud-free-trial.html for 14 days.

See these NodeJS services in action with Splunk APM and leverage Splunk RUM for browser instrumentation and gain insight about the performance and health of the front-end user experience of your application. Once you deploy the Splunk Distribution of the OpenTelemetry Collector you'll also gain insight into your host's metrics and get a clear idea of just how your host is doing with all of these services running. 

All three solutions are avaliable within Splunk Observability Cloud. 

## Where can I learn more about the Splunk Distribution of OpenTelemetry JS?

Visit - https://docs.splunk.com/Observability/gdi/get-data-in/application/nodejs/instrumentation/instrument-nodejs-application.html#instrument-nodejs-applications

## Need to install NodeJS on your host machine?

Visit - https://nodejs.org/en/download/