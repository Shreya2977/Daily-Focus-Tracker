# Daily-Focus-Tracker

## 🚀 Project Overview: 
Daily Focus & Audit DashboardA modern web application built with HTML5, CSS3, and Vanilla JavaScript that provides real-time visualization of productivity metrics. The dashboard features a "Time Warden" system that enforces a strict 24-hour daily limit, ensuring data integrity for time-tracking.

## ✨ Key Features
* Time Warden System: Intelligent input logic that automatically adjusts sliders to prevent the total logged time from exceeding 24 hours.
* Dynamic Focus Scoring: A circular progress ring that calculates a productivity score based on the ratio of study time to total logged time.
* Distraction Analysis: A horizontal progress bar with a glowing glassmorphism effect that tracks Social Media and Entertainment consumption.
* Weekly Twin-Bar Chart: A full-width data visualization comparing focus levels vs. distraction levels across the last seven days.
* Responsive Glassmorphism UI: A sleek, dark-themed interface utilizing backdrop blurs, ambient background orbs, and CSS gradients.

## 🛠️ Technical Stack
* Frontend: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
* Icons: Feather IconsStyling: Modern CSS techniques including backdrop-filter, linear-gradients, and CSS Variables for theme management.
* Visuals: Custom SVG circular progress bars and responsive bar-chart components.

## 📊 How It Works
* Input: Users adjust sliders for Study, Social Media, and Entertainment.
* Constraint: If the user tries to add a 13th hour of study when 12 hours of social media are already logged, the logic trims the other values to maintain the 24-hour cap.

## Visualization:
* Focus Ring: Turns green for high focus ($>70\%$), violet for moderate ($>40\%$), and red for high distraction.
* Twin Bars: The chart updates "Today's" data point in real-time without refreshing the page.


<img width="1365" height="602" alt="Screenshot 2026-02-15 105112" src="https://github.com/user-attachments/assets/616513a4-314f-498d-8135-ad1cd371da89" />

<img width="1365" height="608" alt="Screenshot 2026-02-15 105143" src="https://github.com/user-attachments/assets/b8582d54-51c8-4e2b-a537-06f87a0fba2b" />
