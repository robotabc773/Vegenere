function updateKeyLength()
{
    var table = $("#subInput")
    
    table.html("<th><input></th>".repeat($("#keyLengthInput").val()))
}

function letterToNum(letter)
{
    return letter.toLowerCase().charCodeAt(0) - 97
}

function numToLetter(num)
{
    return String.fromCharCode(((num + 26) % 26) + 97)
}

function update()
{
    var text = $("#text")
    var ciphertext = $("#ciphertextInput").val().toUpperCase()//"ABCDEFAAABBCCDD"
    var plaintext = ""
    var lineSize = parseInt($("#lineSizeInput").val())//10

    for(i = 0; i < ciphertext.length; i++)
    {
        var keyLength = $("#keyLengthInput").val()
        var cipherTextLetter = ciphertext[i].toLowerCase()
        var cipherLetter = $("#subInput").children().eq(i % keyLength).children().first().val()
        if(!cipherLetter.match(/[a-zA-Z]/i))
        {
            plaintext += " "
            continue
        }
        //console.log(Math.abs(letterToNum(cipherTextLetter) - letterToNum(cipherLetter))%26)
        var value = numToLetter(letterToNum(cipherTextLetter) - letterToNum(cipherLetter))
        //console.log(value)
        if (value != "")
        {
            plaintext += value
        }
        else
        {
            plaintext += " "
        }
    }
    //console.log(plaintext)
    
    var formattedText = ""
    if (ciphertext.length != plaintext.length)
    {
        //console.log("ciphertext and plaintext must be same length!")
    }
    else
    {
        for(i = 0; i < plaintext.length; i += lineSize)
        {
            //console.log(i)
            //console.log(plaintext.substr(i, lineSize))
            formattedText += "<div class=\"plaintext\">" + plaintext.substr(i, lineSize) + "</div>"
            //formattedText += "\n"
            formattedText += "<div class=\"ciphertext\">" + ciphertext.substr(i, lineSize) + "</div>"
            formattedText += "\n"
        }
        //console.log(formattedText)
        text.html(formattedText)
    }
  
}