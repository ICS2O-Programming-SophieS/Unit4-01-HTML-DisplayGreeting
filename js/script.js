// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayGreeting () {
  	// initialize variables
	let greeting = ""
	
	// get user input
	let hour = parseInt(document.getElementById('hour').value)

  	// if hour is before noon, display "Good morning!"
	if (hour < 12) {
		greeting = "Good morning!"
	} 
	// otherwise, if hour is before 6pm, display "Good afternoon:)"	
	else if (hour < 18) {
		greeting = "Good afternoon:)"
	}
	// otherwise, if hour is before midnight, display "Good evening.."
	else if (hour < 24) {
		greeting = "Good evening..."
	}
	// otherwise, they did not enter a valid hour
	else {
		greeting = "Please enter a valid hour."
	}

  // display the greeting
  document.getElementById('greeting').innerHTML = greeting
}
