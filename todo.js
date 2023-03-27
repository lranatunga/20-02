let taskBoard =
    {"tasks":[{"boardId":1,"name":"task 4","description":"des 4","owners":["Lakmali","Anastasija"],"date":"2023-03-19","status":"Assign"},{"boardId":1,"name":"task 1","description":"task 1 des","owners":["Lakmali","Anastasija"],"date":"2023-03-12","status":"In progress"},{"boardId":1,"name":"task 2","description":"des 2","owners":["Anastasija","Anh"],"date":"2023-03-13","status":"In progress"},{"boardId":1,"name":"task 3","description":"task 3 des","owners":["Max"],"date":"2023-03-20","status":"Assign"},{"boardId":1,"name":"task 5","description":"des 5","owners":["Anna"],"date":"2023-03-20","status":"Assign"},{"boardId":1,"name":"task 6","description":"des 6","owners":["Lakmali"],"date":"2023-03-13","status":"In progress"}]}


    function sortByDate() {
        let sortData = taskBoard.tasks
    
        return sortData.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
     sortByDate();
     console.log(sortByDate())