$(document).ready(function()
{
    $("#part_2").children().hide();

    $('#learnbtn').click(function() 
    {
        $('html, body').animate(
        {
          scrollTop: $("#part_2").offset().top
        }, 1000);
    });

    $('#projectbtn').click(function() 
    {
        $('html, body').animate(
        {
          scrollTop: $("#part_3").offset().top
        }, 1000);
    });

    setInterval(function()
    {
        if($('html, body').scrollTop() >= ($("#part_2").offset().top - 200))    
        {
            if(!$("#part_2").children().is(":visible"))
            {
                for(let i = 1; i <= 6; i++)
                {
                    progressBarManager($(".p"+i), $(".p"+i).get(0).id);
                }
                $("#part_2").children().fadeIn();
            }
        }
        else 
        {
            $("#part_2").children().fadeOut();
            for(let i = 1; i <= 6; i++)
            {
                progressBarManager($(".p"+i), "0");
            }
        }

        if($('html, body').scrollTop() >= ($("#part_3").offset().top - 200))    
        {
            if(!$("#part_3").children().is(":visible"))
            {
                for(let i = 1; i <= 6; i++)
                {
                    progressBarManager($(".p"+i), $(".p"+i).get(0).id);
                }
                $("#part_3").children().fadeIn();
            }
        }
        else 
        {
            $("#part_3").children().fadeOut();
        }
    }, 200);
});

function imgOver(mimg)
{
    if(mimg.find(".desc").height() <= 0)
    {
        mimg.find(".desc").animate(
        {
            height: "100%"
        }, 300);
    }
}

function imgOut(mimg)
{   
    if($(".rm:hover").length === 0 && $(".desc:hover").length === 0)
    {
        if(mimg.height() > 0)
        {
            mimg.animate(
            {
                height: "0%"
            }, 300);
        }
    }
}

function progressBarManager(pbar, maxval)
{
    let minval = 0;
    $(pbar).attr("value", minval);
    let minterval = setInterval(function()
    {
        if(pbar.is(":visible"))
        {
            console.log("called 3");
            if(minval <= maxval)
            {
                pbar.attr("value", minval);
                minval++;
            }
            else 
            {
                clearInterval(minterval);
            }
        }
    }, 10);
}