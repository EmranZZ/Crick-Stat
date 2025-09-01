# SWE 350: Crick-Stat
# Title: Cricket Player Data Analysis and Smart Team Builder

1. Problem Statement
With the vast amount of cricket data available on platforms like ESPN Cricinfo and CrickBuzz, cricket fans and analysts often struggle to retrieve structured, relevant, and actionable insights. Navigating between multiple web pages for match summaries, player statistics, and team combinations can be overwhelming. Additionally, building an optimal cricket team based on performance metrics and format-specific ranks remains a manual and subjective process.
Goal: The main aim of this project is to create a web-based solution that provides:
Easy access to recent match data


Navigation between teams and their players


External linking to real-time player stats


A smart team builder that forms teams based on ICC rankings and user input



2. Methodology
2.1 Data Source & Scraping
Player and team data is scraped from CrickBuzz 
Data fields: player name, country, role, game format, ICC rank, recent performance, etc.


2.2 Database Design
ERD created to model relationships between players, teams, matches, and performance


Tables: Players, Matches, PlayerStats, Teams, Formats


2.3 Web Application Structure
Frontend: HTML, CSS, JavaScript (React for interactivity)


Backend: Node.js


Database: MySQL 
2.4 Features Implemented
Home Page: Shows latest matches with dates, opponents, and results


Team Page:


Lists teams


Clicking a team shows players


Clicking a player redirects to CrickBuzz stat page


Smart Team Builder:


User selects game type (ODI, Test, T20) and country


System generates a best 11 based on ICC ranking and role constraints


Roles include top order, middle order, all-rounder, spinner, pace bowler



3. Experimental Setup
Environment:
OS: Windows 10 / Ubuntu 22.04


Language: Python 3.11, JavaScript ES6


Frameworks: React.js, Flask/Express


Tools: Postman (for API testing), MySQL Workbench, VS Code


Browser: Chrome (for testing)


Dataset:
Player data from CrickBuzz (Scraped)


ICC Rankings collected manually or scraped from official sources


Test Cases:
Navigation between pages tested


Team builder functionality validated against ICC rankings


External link test for CrickBuzz redirection


Data integrity check after scraping



4. Results and Output Analysis
Feature
Expected Output
Result
Home page
Latest match info loads dynamically
Passed
Team navigation
Team → Players → Player CrickBuzz profile
Passed
Smart Team Builder
ICC-based team builds with correct role constraints
Passed
Game Format Selection
Shows different players for ODI/Test/T20
Passed
External Redirection
Opens CrickBuzz stats page in new tab
Passed


Team builder generates balanced teams with proper distribution (e.g., 4 top-order, 3 middle-order, 4 bowlers, etc.)


System is responsive and intuitive across devices



5. Conclusion
This project successfully demonstrates how web scraping, structured data storage, and front-end interaction can be combined to create a meaningful and interactive cricket data application. By automating data collection and providing a smart team-building utility, the system adds real-world value for fans, coaches, and analysts alike.

6. Future Enhancements
User Login System: Save favorite teams or players


Live Score API: Show real-time match updates on home page


Filter by stats: Allow filtering players by average, strike rate, etc.


Visualizations: Charts and graphs for individual player performance


Fantasy Team Simulator: Pick 11 and simulate outcome of matches


Machine Learning Module: Predict future performance of players

