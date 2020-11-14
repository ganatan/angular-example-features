INSERT INTO continent (name,wikipedia_link) VALUES('North America','North_America');
INSERT INTO continent (name,wikipedia_link) VALUES('Europe','Europe');


INSERT INTO country ( name,wikipedia_link,continent_id) VALUES('United States','United_States', (select id from continent where name='North America'));
INSERT INTO country ( name,wikipedia_link,continent_id) VALUES('Jersey','Jersey', (select id from continent where name='Europe'));


INSERT INTO city ( name,wikipedia_link,country_id) VALUES('New York','New_York_City', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) VALUES('Modesto','Modesto,_California', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) VALUES('Syracus','Syracuse,_New_York', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) VALUES('Saint Helier','Saint_Helier', (select id from country where name='Jersey'));


INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
(select id from city where name='New York'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
(select id from city where name='Modesto'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) VALUES('Tom Cruise','Tom_Cruise','1962-07-03',
(select id from city where name='Syracus'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id) VALUES('Henri Cavill','Henry_Cavill','1983-05-05',
(select id from city where name='Saint Helier'));


INSERT INTO movie(name,wikipedia_link,release_date) VALUES('Avengers: Endgame','Avengers:_Endgame','2019-04-26');
INSERT INTO movie(name,wikipedia_link,release_date) VALUES('Mission: Impossible – Fallout','Mission:_Impossible_–_Fallout','2018-07-27');
INSERT INTO movie(name,wikipedia_link,release_date) VALUES('Sherlock Holmes','Sherlock_Holmes_(2009_film)','2009-12-25');
INSERT INTO movie(name,wikipedia_link,release_date) VALUES('Edge of Tomorrow','Edge_of_Tomorrow','2014-06-06');


INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Avengers: Endgame'),
(select id from person where name='Robert Downey Jr.'));
INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Avengers: Endgame'),
(select id from person where name='Jeremy Renner'));
INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Mission: Impossible – Fallout'),
(select id from person where name='Henri Cavill'));
INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Mission: Impossible – Fallout'),
(select id from person where name='Tom Cruise'));
INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Sherlock Holmes'),
(select id from person where name='Robert Downey Jr.'));
INSERT INTO movie_have_person (movie_id,person_id) VALUES(
(select id from movie where name='Edge of Tomorrow'),
(select id from person where name='Tom Cruise'));


INSERT INTO trailer (youtube_link,movie_id) VALUES('wV-Q0o2OQjQ',
(select id from movie where name='Avengers: Endgame'));
