document.getElementById('dark').addEventListener('click',dark)
function dark()
{
    document.getElementById('box1').style.backgroundColor="lightgrey"
    document.getElementById('calci').style.backgroundColor="lightgrey"
    document.getElementById('light').style.backgroundColor="white"
    document.getElementById('light').style.color="black"
    document.getElementById('dark').style.backgroundColor="	#404040"
    document.getElementById('dark').style.color="white"
    document.getElementById('ans').style.border="2px solid black"
    document.getElementById('ans').style.boxShadow="-7px 8px 13px black"
    document.getElementById('box2').style.backgroundColor="black"
    document.getElementById('ac:hover').style.color="red"
     document.getElementById('del:hover').style.color="red"
    //  document.getElementById('ac').style.color="white"
    //  document.getElementById('del').style.backgroundColor="grey"
    const mydivs = document.querySelectorAll("#one, #two, #three ,#four ,#five,#six,#seven,#eight,#nine,#zero,#ac,#del,#dota,#equal,#per,#multi,#add,#minus,#plus,#div");

      mydivs.forEach((element) => {
     element.style.color = "white";
     element.style.backgroundColor="grey"
     });
}

document.getElementById('light').addEventListener('click',light)
function light()
{

    document.getElementById('dark').style.backgroundColor="white"
    document.getElementById('dark').style.color="black"
    document.getElementById('light').style.backgroundColor="	#404040"
    document.getElementById('light').style.color="white"
    document.getElementById('box1').style.backgroundColor="#FFFFF0"
    document.getElementById('calci').style.backgroundColor="#FFFFF0"
    document.getElementById('ans').style.border="2px solid black"
    document.getElementById('ans').style.boxShadow="-7px 8px 13px lightgrey"
    document.getElementById('box2').style.backgroundColor="#FFE4E1"
    document.getElementById('ac:hover').style.color="red"
    document.getElementById('del:hover').style.color="red"
    const mydivs = document.querySelectorAll("#one, #two, #three ,#four ,#five,#six,#seven,#eight,#nine,#zero,#dota,#equal,#per,#multi,#add,#minus,#ac,#plus,#div,#del");

      mydivs.forEach((element) => {
     element.style.color = "black";
     element.style.backgroundColor="white"
     });
}
