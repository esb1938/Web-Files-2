
  const days = ["Monday -  Morning: Make your favorite coffee, Afternoon: Take a relaxing 20 min walk, Evening: Organize your room for the week, Night: Do a facemask ","Tuesday - Morning: Walk to a coffee ship, Afternoon: Take an online workout class, Evening: Make a homemade dinner (i.e. healthy tacos or hearty salad)","Wednesday - Morning: Try a new morning drink (i.e. Green Juice), Afternoon: Journal for 10 mins, Night: Take a warm bath", "Thursday - Morning: Make a smoothie bowl, Afternoon: Guided Meditation for 10 mins, Night: Make tea and take a relaxing bath", "Friday - Morning: Make favorite coffee, Afternoon: Excercise for 30 mins, Night: Socialize with positive friends ", "Saturday - Morning: Make a hearty breakfast, Afternoon: Find an interesting book to relax and read, Night: Write in journal", "Sunday - Morning: Get your beauty sleep, Afternoon: Lunch with friends as a reset, Night: Organize your planner or room for the week" ];
  let count1 = 0;
  const quotes = ["When you have a dream, you've got to grab it and never let go - Carol Burnett", "Nothing is impossible. The word itself says I'm possible! - Audrey Hepburn", "The bad news is time flies. The good news is you are the pilot - Michael Altshuler", "Life has got all those twists and turns. You have got ot hold on tight and off you go - Nicole Kidman", "You define your own life. Do not let other people write your script - Oprah Winfrey", "Spread love everywhere you go - Mother Teresa", "The only limit to our realization of tomorrow will be our odoubts today - FDR" ];
  let count2 = 0;

  document.getElementById("newday").addEventListener("click", buttonClicked);
  function buttonClicked(){
    console.log(days[count1]);
    document.getElementById("text").innerHTML = days[count1];
    if(count1>=6){
      count1 = 0;
    }else{
      count1++;
    }
  }
  document.getElementById("newquote").addEventListener("click", buttonClicked2);
  function buttonClicked2(){
    console.log(quotes[count2]);
    document.getElementById("quote").innerHTML = quotes[count2];
    if(count2>=6){
      count2 = 0;
    }else{
      count2++;
    }
  }
document.getElementById("relax").addEventListener("click", one);
  function one() {
     alert("Listen to 1 of The Daily Meditation Podcast episodes." );
  }
document.getElementById("workout").addEventListener("click", two);
    function two() {
      alert("Do 30 Burpees, Calf Raises, or Leg Lifts! Go!");
    }
document.getElementById("journal").addEventListener("click", three);
    function three() {
      alert("Write about 3 positives you experienced today, 3 things you are grateful for, or 3 plans you have for the future!");
        }
document.getElementById("fact").addEventListener("click", four);
      function four() {
        alert("Continuing to self-motivate and self-love can lead you through adversity!");
        }
