import React from "react";
import Conclusion from "../components/Conclusion/Conclusion";
import { fullPlayerList } from "../data/playersList";
import { championList, championsListByCost } from "../data/championsList";
const Conclusions = () => {
  return (
    <div className="conclusions">
      <article>
        <section>
          <Conclusion champions={["global"]} title={"Locations"}>
            In the overall graph of unit positions, we can see 3 main clusters:
            in the corners of the last row and in the middle of the first row.
            In the game, we can divide units into defensive, offensive and
            supporting units. Usually in a composition we want to have a similar
            amount of each of them. Offensive and supporting units are often
            placed in the last row, so the numbers are the biggest there. From
            the game concept the board is symmetrical, but we see that players
            prefer the right side. Stats can be boosted by the fact that in most
            matchups you want to be on the same side as your opponent.
          </Conclusion>

          <Conclusion
            champions={["warwick", "gragas", "hecarim"]}
            title={"Defensive units for Early Game"}
          >
            Warwick, Gragas, Hecarim were the strongest defensive units for the
            early game in this patch. They all have higher defensive attributes
            and their attack range is 1, meaning they can only attack adjacent
            units. These are the reasons why they were most often positioned in
            the front row, where they stand closest to the enemy. We can also
            see that they were sometimes positioned further back. This may be
            due to the fact that in the very early stages of the game, units are
            still few. We then want them all to stand together so that our melee
            units are not immediately attacked.
          </Conclusion>

          <Conclusion
            champions={["mordekaiser", "garen"]}
            title={"Defensive units for Late Game"}
          >
            Mordekaiser and Garen dominated the defensive units in the endgame
            in this patch. Like the previous ones, they have higher defensive
            attributes and their attack range is 1. That's why they were lined
            up in the first place.Due to the fact that you cannot buy them at
            the beginning of the game, they very rarely stood at the back.
          </Conclusion>

          <Conclusion
            champions={["ziggs", "kalista", "ashe"]}
            title={"Offensive units for Early Game"}
          >
            As for the offensive units, Ziggs and Kalista were the leading units
            in the early stages of the game. Ashe, on the other hand, was often
            used in the middle stages of the game. Their attack range is 4 or 5,
            so they can attack enemy units standing in the last row. This is
            where players usually positioned them, from where they could safely
            deal damage.
          </Conclusion>

          <Conclusion
            champions={["karma", "heimerdinger"]}
            title={"Offensive units for Late Game"}
          >
            Karma and Heimerdinger are examples of late-game offensive units.
            Together with Draven, they were the most frequently chosen units to
            deal damage. Their attack range is 4, so they usually stood in the
            last row. What makes them different from the early game offensive
            units is that they stand in column 6 just as often as in column 7.
            This is because there is a Thresh unit in the game whose ability
            pulls a character from the opposite corner. To avoid eliminating a
            major source of damage, players seeing Thresh in the opponent's camp
            often choose to place their Carry unit in column 6 or 2.
          </Conclusion>

          <Conclusion
            champions={["draven"]}
            title={"Draven with his range attack of 3"}
          >
            Draven is also a Carry ranged unit similar to Karma and
            Heimerdinger. However, it differs in that its attack range is 3.
            This is why it was more often placed in row 3, from where it could
            attack immediately. If he was standing in the last row, he would
            have to move first to get within range.
          </Conclusion>

          <Conclusion champions={["khazix", "viego"]} title={"Assasins"}>
            Khazix and Viego are examples of assassins. They are unique
            offensive melee units that jump to the enemy's back at the start of
            a round. Their placement in different rows only results in different
            jump times. Because of this, Khazix, which does more damage to
            isolated targets, usually stands at the back to make the jump as
            long as possible so that the enemy formation has time to loosen up.
            Viego, on the other hand, was positioned in front so that the jump
            would be the shortest and he could fight as early as possible. They
            both stand on the sides because their task is to eliminate the
            opponent's Carry units.
          </Conclusion>

          <Conclusion
            champions={["soraka", "ryze", "ivern"]}
            title={"Supporting units"}
          >
            Soraka, Ryze, and Ivern are supporting ranged units and their skills
            are based mainly on crowd control. They do not have high defensive
            attributes, so they are placed in the last rows. However, we do not
            want them to be as safe as the offensive units, so they are often
            placed in the middle columns.
          </Conclusion>

          <Conclusion
            champions={["morgana", "hecarim"]}
            title={"Units with crowd control"}
          >
            A common factor in selecting a position for an unit is its skill.
            Morgana and Hecarim have a skill that affects opponents in a certain
            circle around them. This is why we want to place them in the middle
            of the front row, so that the range of their abilities covers as
            many enemy units as possible. It's worth mentioning that Morgana is
            a ranged unit.
          </Conclusion>

          <Conclusion
            champions={["kindred", "lulu"]}
            title={"Units with area aura skills"}
          >
            Kindred and Lulu are supporting units, and their abilities affect
            the allied army in a certain circle around them. Kindred grants
            immortality and Lulu grants attack speed. It is for this reason that
            they are placed adjacent to corners to strengthen allied offensive
            units.
          </Conclusion>

          <Conclusion
            champions={["zyra", "lux"]}
            title={"Units with farthest targeting skills"}
          >
            Some characters target the farthest unit with their abilities. Zyra
            immobilizes all enemy units between her and the furthest enemy unit,
            while Lux strengthens all allies between her and the furthest allied
            unit. This is why both of these characters are placed in corners, so
            that their abilities cover as much area as possible.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championList]}
            compareType={"champions"}
            players={[fullPlayerList]}
            titles={["Global"]}
            box={"full"}
            width={"100%"}
            title={"Popularity"}
          >
            It is hard to draw many conclusions from the overall popularity
            graph due to the overload of information. However, you can see peaks
            in rounds 3-1, 4-1, 5-1, 6-1. These are the first rounds after
            increasing the amount of health lost with losses. Because of this,
            players often need a sudden reinforcement and rebuilding of the
            army, so they buy more units. These units are later upgraded to a
            higher level or sold, so from rounds 3-2, 4-2, 5-2, 6-2 their amount
            decreases. From round 5-1 we see a steady decrease in the number of
            units (excluding round 6-1), because these are already the stages of
            the game when players start dropping out.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[1], championsListByCost[1]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["", ""]}
            end={["3-6", "7-3"]}
            box={"full"}
            width={"45%"}
            title={"1 Cost Units"}
          >
            In the early game, players can mainly use units with a cost of 1. On
            the graph of the entire game, we can see that their popularity is
            steadily decreasing because they are weaker than more expensive
            units. Analyzing the graph from the early rounds, we can see that 6
            units stood out from the rest: Warwick, Gragas, Kled, Kalista,
            Ziggs, Khazix, Poppy. They were the strongest in the patch and
            everyone was looking to buy them. Vayne, Lissandra and Vladimir on
            the other hand were played very rarely.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[2], championsListByCost[2]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["", ""]}
            end={["4-6", "7-3"]}
            box={"full"}
            width={"45%"}
            title={"2 Cost Units"}
          >
            Units with a cost of 2 are mainly found in the second half of the
            early game and in the mid game. The most frequently played units
            were Brand, Hecarim, Viktor, Thresh and Nautilus, whose possession
            increased in the later stages. He has the Ironclad class, which
            strengthens the whole army with defensive attributes. It is
            especially useful when we already have more units.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[3], championsListByCost[3]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["", ""]}
            start={["4-1", "2-1"]}
            end={["4-6", "7-3"]}
            box={"full"}
            width={"45%"}
            title={"3 Cost Units"}
          >
            Only units with a cost of 5 were played less often than those with a
            cost of 3. This shows the low strength of the second ones, which are
            not very cost-effective in the current patch. Nunu was played most
            often, because he was needed for Brawlers composition. Lulu, Lux and
            Zyra, which are typical support units, were also played frequently.
            Only in single matches players decided to buy Nidalee, which turns
            out to be the weakest unit in this patch.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[4], championsListByCost[4]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["", ""]}
            start={["4-1", "2-1"]}
            end={["7-3", "7-3"]}
            box={"full"}
            width={"45%"}
            title={"4 Cost Units"}
          >
            Late game and mid game are phases of the game where units with a
            cost of 4 made up the majority of compositions. Especially support
            units like Rell, Ivern, and Ryze were extremely popular due to their
            universality. Regardless of the items they will always strengthen
            our composition and carry units. If we look at offensive units,
            magic ones such as Karma and Velkoz were more common. Jax stands out
            from the others, and similarly to Nidalee he was played only a few
            times.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={[championsListByCost[5], championsListByCost[5]]}
            compareType={"champions"}
            players={[fullPlayerList, fullPlayerList]}
            titles={["", ""]}
            start={["5-1", "2-1"]}
            end={["7-3", "7-3"]}
            box={"full"}
            width={"45%"}
            title={"5 Cost Units"}
          >
            Units with a cost of 5 are the rarest in the entire game and the
            hardest to get. Until round 4-1 it is impossible, and even then the
            chances of drawing a buying opportunity are within 1%. However,
            these units are very strong and players often based their
            compositions on them in the final stages of the game. Above all,
            Garen and Kindred were often played. The first one has good synergy
            with Karma, which turned out to be the strongest offensive unit. The
            second one is the strongest support unit.
          </Conclusion>

          <Conclusion
            chartType={"popularity"}
            champions={["aatrox", "ziggs", "ashe"]}
            compareType={"regions"}
            players={[fullPlayerList]}
            titles={["aatrox", "ziggs", "ashe"]}
            start={["2-1", "2-1", "3-1"]}
            end={["2-6", "2-6", "4-6"]}
            width={"30%"}
            height={"150px"}
          >
            The units played in each region did not vary much. Only Asia in
            single cases stood out from the rest. For example, in contrast to
            Europe and America, Aatrox and Ziggs were played more often and Ashe
            was only played once.
          </Conclusion>
        </section>
      </article>
    </div>
  );
};

export default Conclusions;
