#!/usr/bin/bash
for a in 3 4 5 6 
do 
	touch competence$a.html
	head -22 < competence2.html >> competence$a.html
done
