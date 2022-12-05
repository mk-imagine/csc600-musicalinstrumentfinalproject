CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	writtenBy text,
	pubYear text,
	genre text,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes, writtenBy, pubYear, genre) 
VALUES 
(1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 'unknown', 'unknown', 'classical'),
(2, 'Jingle Bells', 'D4 B4 A4 G4 D4 D4 D4 D4 D4 B4 A4 G4 E4 E4 E4 E4', 'Pierpont, James Lord ','1857', 'classical'),
(3, 'Pokemon','A4,8 A4,8 A4,8 A4,4 A4,8 G4,4 E4,8 C4,3 D4,8 A4,4 A4,4 G4,8 F4,8 
	G4,1.5 Bb4,8 Bb4,8 Bb4,8 Bb4,4 B4,8 A4,4 G4,8 F4,3 G4,8 A4,4 A4,8 G4,4 F4,8 
	A4,1.5 A4,8 C5,8 D5,8 Bb4,16 Bb4,16 C5,8 D5,8 D5,8 C5,8 A4,8 G4,8 F4,4 D5,8 
	D5,8 E5,8 F5,8 E5,8', 'Siegler, John; Loeffler, John', '1998', 'soundtrack'),
(4, 'All I Want For Christmas Is You', 'G3 B3 D4 Gb4 E4 D4 A4 G4 G4 Gb4 G4 Gb4
	G4 Gb4 D4 D4 C4 E4 G4 A4 Bb4 A4 G4 E4 C4 Eb4 G4 A4 Bb4 A4 F4 Db4', 'Carey, Mariah; Afanasieff, Walter', '1994', 'pop'),
(5, 'Merry Go Round of Life', 'Bb3 C3 Bb3 C3 Bb3 C3 A3 Bb3 A3 Bb3 A3 Bb3 G3 A3 
	G3 A3 G3 A3 A3 G3 F#3 F#3 F#3 D3 A3 D F#3 D3 D3 G3 Bb3 D3 D3 C3 Bb3 A3 Bb3 G3 
	Bb3 D3 G3 G3 G3 F3 Eb3 F3 A3 D3 F3 A3 G3 F3 E3 F3 G3 F3 E3 D3 C3 Bb3 C3 D3 C3 
	G3 A3 A3', 'Hisaishi, Joe', '2004', 'contemporary/classical');