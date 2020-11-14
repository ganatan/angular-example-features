INSERT INTO continent (name,wikipedia_link) 
VALUES('North America','North_America');
INSERT INTO continent (name,wikipedia_link) 
VALUES('Europe','Europe');


INSERT INTO country ( name,wikipedia_link,continent_id) 
VALUES('United States','United_States', (select id from continent where name='North America'));
INSERT INTO country ( name,wikipedia_link,continent_id) 
VALUES('Jersey','Jersey', (select id from continent where name='Europe'));
INSERT INTO country ( name,wikipedia_link,continent_id) 
VALUES('Sweden','Sweden', (select id from continent where name='Europe'));


INSERT INTO city ( name,wikipedia_link,country_id) 
VALUES('New York','New_York_City', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) 
VALUES('Modesto','Modesto,_California', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) 
VALUES('Syracus','Syracuse,_New_York', (select id from country where name='United States'));
INSERT INTO city ( name,wikipedia_link,country_id) 
VALUES('Saint Helier','Saint_Helier', (select id from country where name='Jersey'));
INSERT INTO city ( name,wikipedia_link,country_id) 
VALUES('Stockholm','Stockholm', (select id from country where name='Sweden'));


INSERT INTO gender (name) VALUES('man');
INSERT INTO gender (name) VALUES('woman');


INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Robert Downey Jr.','Robert_Downey_Jr.','1965-04-04',
(select id from city where name='New York'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Jeremy Renner','Jeremy_Renner','1971-01-07',
(select id from city where name='Modesto'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Tom Cruise','Tom_Cruise','1962-07-03',
(select id from city where name='Syracus'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Henri Cavill','Henry_Cavill','1983-05-05',
(select id from city where name='Saint Helier'),
(select id from gender where name='man'));
INSERT INTO person (name,wikipedia_link,birth_date,birth_city_id,gender_id) 
VALUES('Rebecca Ferguson','Rebecca_Ferguson','1983-10-19',
(select id from city where name='Stockholm'),
(select id from gender where name='woman'));


INSERT INTO movie(name,wikipedia_link,release_date,franchise,show,movie,clip,domestic,worldwide,international,budget) 
VALUES('Avengers: Endgame','Avengers:_Endgame','2019-04-26',true,false,true,false,858373000,1939427564,2797800564,356000000);
INSERT INTO movie(name,wikipedia_link,release_date,franchise,show,movie,clip,domestic,worldwide,international,budget) 
VALUES('Mission: Impossible – Fallout','Mission:_Impossible_–_Fallout','2018-07-27',true,false,true,false,220159104,572427555,792586659,178000000);
INSERT INTO movie(name,wikipedia_link,release_date,franchise,show,movie,clip,domestic,worldwide,international,budget) 
VALUES('Sherlock Holmes','Sherlock_Holmes_(2009_film)','2009-12-25',true,false,true,false,209028679,315000000,524028679,90000000);
INSERT INTO movie(name,wikipedia_link,release_date,franchise,show,movie,clip,domestic,worldwide,international,budget) 
VALUES('Edge of Tomorrow','Edge_of_Tomorrow','2014-06-06',true,false,true,false,100206256,270335000,370541256,178000000);


INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Avengers: Endgame'),
(select id from person where name='Robert Downey Jr.'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Avengers: Endgame'),
(select id from person where name='Jeremy Renner'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Mission: Impossible – Fallout'),
(select id from person where name='Henri Cavill'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Mission: Impossible – Fallout'),
(select id from person where name='Tom Cruise'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Mission: Impossible – Fallout'),
(select id from person where name='Rebecca Ferguson'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Sherlock Holmes'),
(select id from person where name='Robert Downey Jr.'));
INSERT INTO movie_person (movie_id,person_id) VALUES(
(select id from movie where name='Edge of Tomorrow'),
(select id from person where name='Tom Cruise'));


INSERT INTO trailer (youtube_link,movie_id) 
VALUES('wV-Q0o2OQjQ',(select id from movie where name='Avengers: Endgame'));
