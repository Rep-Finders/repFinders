'use strict';

page('/', splashController.init);

page('/results', resultsController.init);

// page('/results/city', resultsView.viewCity);//these 3 or 4 func subject to change based on how resultsView is coded
page('/city-county', resultsView.viewCityCounty);
page('/state', resultsView.viewState);
page('/federal', resultsView.viewFederal);

page('/about', aboutView.init);

page();
