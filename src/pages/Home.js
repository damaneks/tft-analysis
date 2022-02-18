import React from "react";
import Conclusion from "../components/Conclusion/Conclusion";
import ChampionPlot from "../data/ChampionsPlot.png";
import RoundsPlot from "../data/RoundsPlot.png";
import championImg1 from "../data/Champions1.png";
import championImg2 from "../data/Champion2.png";
import roundImg1 from "../data/Rounds1.png";
import roundImg2 from "../data/Round2.png";
import counterImg1 from "../data/Counter1.png";
import counterImg2 from "../data/Counter2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="conclusions">
        <article>
          <section>
            <Conclusion
              title={
                "Using computer vision to automatically analyze the Teamfight Tactics game"
              }
            >
              Damian Wróblewski - June 2021
            </Conclusion>

            <Conclusion title={"Introduction"}>
              The goal of the project is to build an application for automatic
              analysis of the game Teamfight Tactics(TFT). The application will
              observe the player's units, record the composition of his army
              throughout the game and visualize the results of the analysis. The
              TFT developer has not provided a gameplay API, so the use of
              computer vision for unit detection is needed.
            </Conclusion>

            <Conclusion title={"Project structure"}>
              Two web applications will be created for the project: one to
              analyze and one to visualize the results. The first one, based on
              Python Flask technology, will run on a GPU machine and will be
              used to analyse the input data. The second application will be a
              website written in React.JS technology and its purpose will be to
              display the analysis results. This website will be freely
              accessible to any internet user by hosting on Azure cloud.
            </Conclusion>

            <Conclusion title={"Downloading and compiling YOLOv4"}>
              The project uses the YoloV4 neural network, which was downloaded
              from the https://github.com/AlexeyAB/darknet repository.
              Compilation was done with the help of package manager vcpkg.
            </Conclusion>

            <Conclusion
              title={"Development of a training, validation and test dataset"}
            >
              To create the learning set we used recordings of our own games and
              archived broadcasts of other players from the Twitch platform.
              Single frames were exported from the recordings using Yolo_mark
              software dedicated for Yolo. Labeling was done with labelImg tool.
              3 models were needed for the project: to detect if there is
              currently a planning phase (only then does the application analyze
              the army), to detect the round and to detect the units. All models
              were learned on the same set of frames from game recordings, but
              with different labeling. The set for the round detection model
              consisted of 2964 post-labeled frames from the game recordings
              appropriately truncated to include only the portion of the screen
              responsible for the round information. The other two sets
              consisted of 1216 full 1920x1080 frames. All sets were divided
              into training, validation, and test by a ratio of 80-10-10.
            </Conclusion>

            <Conclusion
              title={"Development of a training, validation and test dataset"}
            >
              To create the learning set we used recordings of our own games and
              archived broadcasts of other players from the Twitch platform.
              Single frames were exported from the recordings using Yolo_mark
              software dedicated for Yolo. Labeling was done with labelImg tool.
              3 models were needed for the project: to detect if there is
              currently a planning phase (only then does the application analyze
              the army), to detect the round and to detect the units. All models
              were learned on the same set of frames from game recordings, but
              with different labeling. The set for the round detection model
              consisted of 2964 post-labeled frames from the game recordings
              appropriately truncated to include only the portion of the screen
              responsible for the round information. The other two sets
              consisted of 1216 full 1920x1080 frames. All sets were divided
              into training, validation, and test by a ratio of 80-10-10.
              <br />
              <br />
              <hr />
              <br />
              <figure>
                <img src={ChampionPlot} alt="" style={{ maxWidth: "100%" }} />
                <figcaption>
                  The size of each class for the unit detection model
                </figcaption>
              </figure>
              <br />
              <hr />
              <br />
              <figure>
                <img src={RoundsPlot} alt="" style={{ maxWidth: "100%" }} />
                <figcaption>
                  The size of each class for the round detection model
                </figcaption>
              </figure>
            </Conclusion>

            <Conclusion title={"Object detection results"}>
              The project needed to train three models. Each was based on the
              default YoloV4 configuration file and scaled the input images to
              512x512 resolution. No additional modifications were made to the
              output images other than those made automatically by the network.
              <br />
              <br />
              Changes to the configuration file against the default settings:
              <br />
              <code>
                # all models <br />
                batch = 64 <br />
                subdivisions = 64 <br />
                width = 512 <br />
                height = 512 <br />
                <br />
                <br />
                # planning phase detection model <br />
                max_batches=2000 <br />
                steps=1600,1800 <br />
                [yolo] <br />
                classes=1 <br />
                filters=18 <br />
                <br />
                <br />
                # rounds detection model <br />
                max_batches=10000 <br />
                steps=8000,9000 <br />
                [yolo] <br />
                classes=24 <br />
                filters=87 <br />
                <br />
                <br />
                # units detection model <br />
                max_batches=10000 <br />
                steps=8000,9000 <br />
                [yolo] <br />
                classes=58 <br />
                filters=189 <br />
              </code>
              <br />
              <hr />
              <br />
              <figure>
                <table style={{ marginLeft: "auto", marginRight: "auto" }}>
                  <tr>
                    <th>Model:</th>
                    <th>Planning phase</th>
                    <th>Rounds</th>
                    <th>Units</th>
                  </tr>
                  <tr>
                    <td>0.5mAP</td>
                    <td>1</td>
                    <td>0,875981</td>
                    <td>0,97256</td>
                  </tr>
                  <tr>
                    <td>0.75mAP</td>
                    <td>0,13098</td>
                    <td>0,857301</td>
                    <td>0,8672</td>
                  </tr>
                  <tr>
                    <td>0.5:0.05:0.95mAP</td>
                    <td>0,4159489</td>
                    <td>0,650235</td>
                    <td>0,6926408</td>
                  </tr>
                </table>
                <figcaption>Model-specific mAP values</figcaption>
              </figure>
              <br />
              <hr />
              <br />
              <figure>
                <img
                  src={championImg1}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={championImg2}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginLeft: "10px",
                  }}
                />
                <figcaption>Unit detection examples</figcaption>
              </figure>
              <br />
              <hr />
              <br />
              <figure>
                <img
                  src={roundImg1}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={roundImg2}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginLeft: "10px",
                  }}
                />
                <figcaption>Rounds detection examples</figcaption>
              </figure>
              <br />
              <hr />
              <br />
              <figure>
                <img
                  src={counterImg1}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginRight: "10px",
                  }}
                />
                <img
                  src={counterImg2}
                  alt=""
                  style={{
                    maxHeight: 400,
                    maxWidth: "40%",
                    marginLeft: "10px",
                  }}
                />
                <figcaption>Planning phase detection examples</figcaption>
              </figure>
            </Conclusion>

            <Conclusion title={"Definition of the input data"}>
              The input data are game recordings of the best TFT players sharing
              live video of their games on the Twitch platform. The analysis
              uses 10 games of 9 players. Each region (Europe, America, Asia)
              has 3 representatives.
              <br />
              <br />
              <b>Input File Requirements:</b> <br />
              Extension: .mp4 <br />
              Resolution: 1920-1080 <br />
              FPS: 60
            </Conclusion>

            <Conclusion title={"Definition of the output data"}>
              The analysis application returns data as .json files. Each unit,
              player, region has a separate file. Additionally it returns
              location.json files, popularity.json files relating to general
              statistics and detections.json file containing history of all
              analyses with all obtained data. The location.json file contains
              information about the location of particular units on the
              battlefield, while the rest of the files contain information about
              the popularity of particular units in given rounds.
              <br />
              <br />
              Based on these files, the website visualizes the analysis results
              through two interactive graphs: a line graph and a heat map. The
              visitor can select which units, regions and players to present
              data for. Additionally, the website provides a described analysis
              of multiple graphs for less experienced with the game.Based on
              these files, the website visualizes the analysis results through
              two interactive graphs: a line graph and a heat map. The visitor
              can select which units, regions and players to present data for.
              Additionally, the website provides a described analysis of
              multiple graphs for less experienced with the game.
            </Conclusion>

            <Conclusion title={"Definition of target statistics"}>
              <b>Statistics presented by the application:</b>
              <br />
              <b>Popularity: </b> the number of occurrences of a character in
              each round. Changing over time allows you to see the phases of the
              game in which a character is useful according to the best players.
              In addition, it is possible to compare different characters in
              order to select the strongest.
              <br />
              <b>Location: </b>The number of times a character appears in a
              particular tile on the playing field. This statistic allows you to
              see where the character should be placed according to the best
              players.
            </Conclusion>

            <Conclusion title={"Building a set for analysis"}>
              Archived broadcasts of players downloaded from the Twitch platform
              using the Twitch Leecher tool were used for analysis. The
              recordings were then cut into individual games, 90 in total (10
              for each player), and rendered to reduce file size.
            </Conclusion>

            <Conclusion title={"Performing the analyses"}>
              The analysis was performed using a written application and its
              length for a single 40-minute game was 10 minutes on a machine
              equipped with a GTX 1060 graphics card. The results of the
              analysis can be found on the application's GitHub, from where they
              are being downloaded by the visualization website.
            </Conclusion>

            <Conclusion title={"Visualization of results"}>
              To visualize the results, a website was built with 4 subpages:
              Locations, Popularity, Conclusions, Players.
              <br />
              <br />
              The
              <a href="/locations">
                <b> Location </b>
              </a>
              subpage contains a heat map showing the number of occurrences of
              units on particular tiles of the board. The user can choose which
              unit the data is displayed. Apart from the graph, the subpage also
              contains the main information about that unit, such as its attack
              range and a description of its abilities, which are supposed to to
              help analyze the data and look for relationships.
              <br />
              <br />
              The
              <a href="popularity">
                <b> Popularity </b>
              </a>
              subpage contains a line graph showing the number of occurrences of
              units in each round. The user can choose to compare units, regions
              or players. Additionally, he has the option to narrow the data to
              individual units, players, and regions.
              <br />
              <br />
              The
              <a href="conclusions">
                <b> Conclusions </b>
              </a>
              subpage contains a number of sections with chart-based analyses I
              have done, which can be generated using the site.
              <br />
              <br />
              The
              <a href="players">
                <b> Players </b>
              </a>
              subpage contains a list of players whose games were analyzed.
              Description of each player consists of the region he represents
              and the statistics of the current patch of the game. Additionally,
              by clicking on a player, the user is directed to profile from the
              Twitch platform.
            </Conclusion>

            <Conclusion title={"Conclusions from the analysis"}>
              Match analysis showed that some units were definitely played more
              often than the rest. Records were taken from the best players in
              the world, so it can be assumed that these units were the best in
              the current version of the game and you should base your game on
              them. In the early rounds, the most popular defensive units were
              Gragas, Warwick, and Hecarim. For damage, it's a good idea to add
              units like Ziggs, Kalista or Ashe to them. In the late stages,
              defensive units such as Garen, Mordekaiser, and Volibear were the
              most popular, while Karma, Velkoz, Heimerdinger, and Draven were
              responsible for dealing damage. Also very popular were supportive
              units such as Ryze, Ivern and Soraka. They are extremely versatile
              and useful in any composition.
              <br />
              Additional stats analysis confirmed that units with a cost of 5
              give the highest chance to be ranked 1st. However, these units are
              expensive and rare. It takes luck or good management of the early
              game and economy to have a chance to get them. We should not base
              the entire game on them, because there is a high chance of not
              having them appear in the store. However, if we have opportunity
              to buy them then we should do so.
              <br />
              The analysis of unit positions on the board showed that defensive
              units should be placed at the front of our army (near the center
              of the board). Offensive units should be placed in the corners so
              that they are as far away from the enemy as possible and are able
              to inflict damage safely. Positioning support units often depended
              on their abilities, but usually it was the bottom two rows.
            </Conclusion>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Home;
