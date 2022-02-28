import ukr from './ukraine.jpg';
import './App.css';

function App() {
  return (
      <><div className="App">

          <h1 class="peace">Peace to the World</h1>

          <hr />
          <br />
          <select class="menus" onchange="location = this.value;">
              <option value="Events Leading to Current Situation">Events Leading to Current Situation</option>
              <option value="NATO and USA Perspective">NATO and USA Perspective</option>
              <option value="Is War Upon Us?">Is War Upon Us?</option>
              <option value="Implications to Other Nations">Implications to Other Nations</option>
              <option value="Military Intervention">Military Intervention</option>
          </select>
      </div>
          <div>
              <section id="sect">
                  <h2><i><a id="okay" href="https://en.wikipedia.org/wiki/Ukraine">On the History of Ukraine</a></i></h2>
                  <p id="uc">
                      <strong>Why have Russian troops attacked?</strong><br/>

                      Russian troops are closing in on Ukraine's capital, days after Russia's leader ordered a full-scale invasion from the north, east and south. In a pre-dawn TV address on 24 February, he declared Russia could not feel "safe, develop and exist" because of what he claimed was a constant threat from modern Ukraine.

                      Airports and military headquarters were hit first then tanks and troops rolled into Ukraine from Russia, Russian-annexed Crimea and ally Belarus.

                      Many of President Putin's arguments were false or irrational. He claimed his goal was to protect people subjected to bullying and genocide and aim for the "demilitarisation and de-Nazification" of Ukraine. There has been no genocide in Ukraine: it is a vibrant democracy, led by a president who is Jewish.

                      "How could I be a Nazi?" said Volodymr Zelensky, who likened Russia's onslaught to Nazi Germany's invasion in World War Two. Ukraine's chief rabbi and the Auschwitz Memorial have also rejected Mr Putin's slur.<br />
                      <br/><strong>How far will Russia go?</strong><br/>

                      It is now clear that Russia is seeking to overthrow Ukraine's democratically elected government. Its aim is that Ukraine be freed from oppression and "cleansed of the Nazis".

                      President Zelensky said he had been warned "the enemy has designated me as target number one; my family is target number two".

                      This false narrative of a Ukraine seized by fascists in 2014 has been spun regularly on Kremlin-controlled TV. Mr Putin has spoken of bringing to court "those who committed numerous bloody crimes against civilians".

                      What Russia's plans are for Ukraine are unknown, but it faces stiff resistance from a deeply hostile population.

                      In January, the UK accused Moscow of plotting to install a pro-Moscow puppet to lead Ukraine's government - a claim rejected at the time by Russia as nonsense. One unconfirmed intelligence report has suggested Russia aims to split the country in two.

                      In the days before the invasion, when up to 200,000 troops were near Ukraine's borders, Russia's public focus was purely on the eastern areas of Luhansk and Donetsk.

                      By recognising the separatist areas controlled by Russian proxies as independent, Mr Putin was telling the world they were no longer part of Ukraine. Then he revealed that he supported their claims to far more Ukrainian territory.

                      The self-styled people's republics cover little more than a third of the whole of Ukraine's Luhansk and Donetsk regions, but the rebels covet the rest, too.




                  </p>
                  <div id="pic">
                      <img src={ukr} width="500px" height="500px" alt="ukraine" />
                  </div>
              </section>
              
              

          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />



          <p id="bottom"><i><q>Together we pray for peace in Ukraine.<cite><br />-Aravo Egelon</cite></q></i></p>
          <br />
          <br />
          <div class="end">
              <p><i>Source: BBC World</i></p>
              <p><i>&copy;2022 BBC</i></p>
            </div>


      </>
  );
}

export default App;
