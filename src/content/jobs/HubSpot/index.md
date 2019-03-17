---
date: '2017-08-21'
title: 'Senior Software Engineer'
company: 'HubSpot'
location: 'Cambridge, MA'
range: 'August 2017 - Present'
url: 'https://www.hubspot.com'
---

##### Developer Experience Backend Team (October 2018 - Present)

- Improved Webhook Subscription daily delivery rate from <75% to over 98%, mainly through improving our retry algorithm, and better identifying when a customer's downstream service is impaired.
- Built an External API Call Metrics pipeline to provide critical business insights into how external developers use HubSpot's APIs. Parses multiple TB of logs daily to identify external calls. Utilizes Kafka and Amazon Athena.

##### Salesforce Integration Team (August 2017 - October 2018)

- Overhauled cron based polling infrastructure that detects changes in Salesforce objects to be a much more scalable distributed and threaded polling implementation. Greatly reduced average time to detect changes in almost 1 Billion objects daily!
- Built out Multiple Pipeline sync, which enabled Salesforce customers to seamlessly map their complex Business Processes 1:1 to HubSpot's Pipelines while still successfully syncing Salesforce Opportunities to HubSpot Deals.
- Greatly improved API rate limiting performance on calls to Salesforce by utilizing a rolling window bucketing algorithm backed by MySQL.

#### Key Technologies:

- Java 8, Dropwizard, MySQL, Kafka, Amazon SQS, Amazon Athena, Memcached, Amazon S3.
