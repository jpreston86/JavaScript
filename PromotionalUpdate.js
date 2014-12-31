<script>
/*******************************************************************************
*
*	Promotion Switch Automation
*	By: Joseph Preston
*	Date: December 31, 2014
*	Version: 0.0.1
*	Description: This script was created in order to automate the updating of
*				 promotions for the website in question. This has been 
*				 implemented in JavaScript due to lack of DOM support in PHP.
*
*******************************************************************************/

// Array to assign 3 letter code to month
var monthName = new Array();
monthName[0] = "Jan";
monthName[1] = "Feb";
monthName[2] = "Mar";
monthName[3] = "Apr";
monthName[4] = "May";
monthName[5] = "Jun";
monthName[6] = "Jul";
monthName[7] = "Aug";
monthName[8] = "Sep";
monthName[9] = "Oct";
monthName[10] = "Nov";
monthName[11] = "Dec";

// Get today's date
var d = new Date();

// Get the month's 3 letter code
var month = monthName[d.getMonth()];

// Get the date of the month
var day = d.getDate();

// Get the 4 digit year
var year = d.getFullYear();

// Updates image source and PDF link based on date
document.getElementById("promotionPdf").href = "Documents/" + year + "/" + month + "-" + year + "_Promotions.pdf";
document.getElementById("promotionGif").src = "Images/MonthlySpecials/" + year + "/" + month + year + "Promotions.gif";

</script>
