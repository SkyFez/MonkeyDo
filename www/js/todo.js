function getArray()
{
	var toDoList = new Array;				//Create An Array
	var taskStr = localStorage.getItem('toDoArray');		//Get the Task from Input using LocalStorage
	if(taskStr !== null)					//if the value is NOT empty --null--
		{
			toDoList = JSON.parse(taskStr);		//Parse the data back into JavaScript format
		}
	return toDoList;					//Return the populated Array
}

function addTask()
{
	var task = document.getElementById("taskName").value;		//create a variable to hold value of input
	var array = getArray();						//create a variable to hold our Array
	array.push(task);						//pushing the task into the Array
	localStorage.setItem('toDoArray', JSON.stringify(array));	//Store the task in localStorage converting the data to a string
	show();								//Run the Show function to update the code
	
	return false;							//exit the function as all the work has been completed
}

function show()
{
	var array = getArray();						//create the variable to hold Array
	var htmlFormat = "<ul>";					//Add unordered List
	
	for (var i=0; i < array.length; i++)				//A For Loop to display the Array
		{
			htmlFormat += "<li>" + array[i] + "</li>";	//I may change this line of code so you can understand it better
		}
	htmlFormat += "</ul>";						//Close the unordered list
	document.getElementById('taskList').innerHTML = htmlFormat;		//Show the document
}

document.getElementById('add').addEventListener('click', addTask);	//When the button is clicked - run the correct function
show();									//Shows the Empty Array