$(document).ready(function () {
    // Function to fetch data form dummy api using ajax
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        dataType: "json",
        success: function (data) {
            const tableBody = $("#table-body");
            tableBody.empty(); // Clear existing data

            // Loop through the data and create table rows
            $.each(data, function (key, value) {
                const row = $("<tr>");
                row.html(`
                    <td>${value.id}</td>
                    <td>${value.name}</td>
                    <td>${value.email}</td>
                `);
                tableBody.append(row);
            });
        },
        error: function (error) {
            console.error("Error fetching data:", error);
        }
    });
});


// Input field visiblity
$(document).ready(function () {
    $("#add-fiele-visible").click(function () {
        $("#user-form").delay("fast").fadeIn();
        // $("#search-bar").hide();
        // $("#user-form").css({ "display": "block" });

    });
});


// Name and email validation
$(document).ready(function () {

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validate the name input
    function validateName() {
        var name = $('#userName').val().trim();
        if (name === '') {
            $("#userName").addClass("is-invalid");
            $('#nameError').text('Name is required');
            return false;
        } else if (name.length < 3) {
            $("#userName").addClass("is-invalid");
            $('#nameError').text('Invalid Name');
        }
        else if (!nameRegex.test(name)) {
            $("#userName").addClass("is-invalid");
            $('#nameError').text('Invalid name format');
            return false;
        } else {
            $('#nameError').text('');
            $("#userName").removeClass("is-invalid");
            return true;
        }
    }

    //validate the email input
    function validateEmail() {
        var email = $('#userEmail').val().trim();
        if (email === '') {
            $('#emailError').text('Email is required');
            $("#userEmail").addClass("is-invalid");
            return false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Invalid email format');
            $("#userEmail").addClass("is-invalid");
            return false;
        } else {
            $('#emailError').text('');
            $("#userEmail").removeClass("is-invalid");
            return true;
        }
    }

    // On input check, validate the inputs
    $('#userName').on('input', validateName);
    $('#userEmail').on('input', validateEmail);

    //click add button to add the data into the table
    $("#add-user").click(function () {
        //id auto generater
        table = document.getElementById('myTable');
        tr = table.querySelector('tbody').getElementsByTagName('tr');
        var res = tr[tr.length - 1].getElementsByTagName('td')[0].textContent;
        var serialNum = parseInt(res) + 1;

        // Get user input values
        const sno = serialNum;
        const username = $("#userName").val();
        const useremail = $("#userEmail").val();
        const tableBody = $("#table-body");

        const row = $("<tr>");
        row.html(`
            <td>${sno}</td>
            <td>${username}</td>
            <td>${useremail}</td>
        `);

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var namePattern = /^[a-zA-Z\s]+$/;

        if (username != "" && useremail != "" && namePattern.test(username) && username.length > 2 && emailPattern.test(useremail)) {
            // $("#user-form").hide();
            tableBody.append(row);
            // cleare the input field after inserting the data
            $("#userId").val("");
            $("#userName").val("");
            $("#userEmail").val("");
            $("#userName").removeClass("is-invalid");
            $("#userEmail").removeClass("is-invalid");
        } else if (username == "" && useremail == "") {
            $('#nameError').text('Name is required');
            $('#emailError').text('Email is required');
            $("#userName").addClass("is-invalid");
            $("#userEmail").addClass("is-invalid");
        } else if (username == "") {
            $('#nameError').text('Name is required');
            $("#userName").addClass("is-invalid");
        } else if (useremail == "") {
            $('#emailError').text('Email is required');
            $("#userEmail").addClass("is-invalid");
        }

    });
});


// search the record based on name and email
$(document).ready(function () {
    $("#search-button").click(function () {
        $("#search-bar").delay("fast").fadeIn();
        // $("#user-form").hide();

        var table = $('#myTable');
        // var result = $('#table-body');
        var searchInput = $('#search-input');
        searchInput.on('input', function () {
            // console.log(typeof searchInput.length);

            var inputName = $('#search-input').val().toLowerCase();
            if (inputName.length >= 3) {
                table.find('tbody tr').each(function () {
                    var row = $(this);
                    var existName = row.find('td:eq(1)').text().toLowerCase(); // Get the name from the 2nd column
                    var existEmail = row.find('td:eq(2)').text().toLowerCase(); // Get the email from the 3nd column

                    // Check the data is present or not
                    if (existName.indexOf(inputName) > -1 || existEmail.indexOf(inputName) > -1) {
                        row.show();
                    } else {
                        row.hide();
                    }
                });
            } else {
                table.find('tbody tr').show();
            }
        });

    });
//  go to page nation
    $("#datatable").click(function(){
        window.location.href = "datatable.html";
    });
});



// drop down check box visible
$(document).ready(function () {
    // Toggle the dropdown when the button is clicked
    $('#dropdownButton').click(function () {
        $('.dropdown-menu').toggle();
    });

    // Close the dropdown when clicking outside of it (optional)
    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });


    // show the side menu when we click the toogle button
    $(document).ready(function () {
        var currentMargin = $("#side_menu").css("margin-left");
        $(".navbar-toggler").click(function (event) {
            $("#side_menu").css("margin-left", "0px");
            $("#user-form").hide();
            $("#search-bar").hide();
            //   alert("Clicked toogle");
        });

        // $(window).resize(function () {
            if ($(window).width() < 992) {
                $(window).click(function (event) {
                    if (!$(event.target).closest(".navbar-toggler").length && !$(event.target).closest(".dropdown-toggle").length && !$(event.target).closest("#checkboxForm").length) {
                        $("#side_menu").css("margin-left", "-600px");
                        // alert("Clicked anywhere in the window except the Toggle button");
                    }
                });

            }
            else if($(window).width() == 992){
                $("#side_menu").css("margin-left", "0px");
            }
            else if($(window).width() == 991){
                $("#side_menu").css("visiblity", "hide");
            }
        // });




    });

});

