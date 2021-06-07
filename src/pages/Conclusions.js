import React from "react";
import Conclusion from "../components/Conclusion/Conclusion";
import { fullPlayerList } from "../data/playersList";
import { championList, championsListByCost } from "../data/championsList";
const Conclusions = () => {
  return (
    <div className="conclusions">
      <article>
        <section>
          <Conclusion champions={["global"]}>
            Initially, let's look at the overall graph of unit locations. We can
            see 3 main clusters: in the corners of the last row and in the
            middle of the first row. From the game's premise, the board is
            symmetrical, but we can see that players prefer the right side. The
            stats might be further boosted by the fact that in most matchups we
            want to be on the same side as our opponent.
          </Conclusion>

          <Conclusion champions={["warwick", "gragas", "hecarim"]}>
            Let's start with melee units using Warwick as an example. His attack
            range is 1, meaning he can only attack adjacent characters. We can
            see that he's usually positioned in the middle of the first row, so
            he's closest to the rival units and can attack as quickly as
            possible. Check out other melee units such as: Gragas, Hecarim or
            Mordekaiser.
          </Conclusion>

          <Conclusion champions={["ziggs", "kalista", "ashe"]}>
            Ranged
          </Conclusion>

          <Conclusion champions={["aphelios", "brand", "karma"]}>
            Carry
          </Conclusion>

          <Conclusion champions={["draven"]}>
            Carry z mniejszym zasięgiem
          </Conclusion>

          <Conclusion champions={["soraka", "ryze", "ivern"]}>
            Support
          </Conclusion>

          <Conclusion champions={["morgana", "hecarim"]}>
            Skill wokół siebie
          </Conclusion>

          <Conclusion champions={["kindred", "lulu"]}>
            Skill wokół siebie ale dla sojusznika
          </Conclusion>

          <Conclusion champions={["zyra", "lux"]}>
            Skill na najdalszy target
          </Conclusion>

          <Conclusion champions={["khazix", "viego"]}>
            Kha i odizolowane cele
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championList]}
            compareType={"champions"}
            players={[fullPlayerList]}
            titles={["Global"]}
            box={"full"}
            width={"100%"}
          >
            Info o ogólnych statystykach
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[1], championsListByCost[2]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["1 Cost", "2 Cost"]}
            end={"3-6"}
            box={"full"}
            width={"45%"}
          >
            Early Game
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[4], championsListByCost[5]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["4 Cost", "5 Cost"]}
            start={"5-1"}
            box={"full"}
            width={"45%"}
          >
            Late Game
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[
              "aatrox",
              "gragas",
              "kled",
              "leona",
              "poppy",
              "udyr",
              "warwick",
              "vladimir",
            ]}
            compareType={"regions"}
            players={[fullPlayerList]}
            titles={[
              "aatrox",
              "gragas",
              "kled",
              "leona",
              "poppy",
              "udyr",
              "warwick",
              "vladimir",
            ]}
            end={"2-6"}
            width={"20%"}
            height={"150px"}
          >
            Regions Early Game Defensive
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={["kalista", "khazix", "lissandra", "vayne", "ziggs"]}
            compareType={"regions"}
            players={[fullPlayerList]}
            titles={["kalista", "khazix", "lissandra", "vayne", "ziggs"]}
            end={"2-6"}
            width={"20%"}
            height={"150px"}
          >
            Regions Early Game Ofensive
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[
              "draven",
              "riven",
              "yasuo",
              "brand",
              "aphelios",
              "karma",
              "teemo",
              "velkoz",
            ]}
            compareType={"regions"}
            players={[fullPlayerList]}
            titles={[
              "draven",
              "riven",
              "yasuo",
              "brand",
              "aphelios",
              "karma",
              "teemo",
              "velkoz",
            ]}
            start={"5-1"}
            end={"6-6"}
            width={"20%"}
            height={"150px"}
          >
            Regions Late Game Carries
          </Conclusion>
        </section>
      </article>
    </div>
  );
};

export default Conclusions;
