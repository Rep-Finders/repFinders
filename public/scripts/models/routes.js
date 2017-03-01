'use strict';

// page('/', splashController.init);

page('/results', resultsController.init);

// page('/results/city', resultsView.viewCity);//these 3 or 4 func subject to change based on how resultsView is coded
page('/results/city-county', resultsView.viewCityCounty);
page('/results/state', resultsView.viewState);
page('/results/federal', resultsView.viewFederal);

// page('/about', aboutView.init);

page();
