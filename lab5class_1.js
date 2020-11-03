$(document).ready(function () {
    $("form").submit(printForm);

    function printForm(event) {
        // prevent form from flashing and resetting
        event.preventDefault();

        var selectedRadioButton = $("input[name=rank]:checked");
        var rank = selectedRadioButton.data("rank-name");
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var fullOuput = rank + " " + firstName + " " + lastName;

        $("#output").text(fullOuput);
    }
});