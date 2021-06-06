import React from "react";
import Conclusion from "../components/Conclusion/Conclusion";

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
            champions={["khazix", "gragas"]}
            compareType={"champions"}
            players={["Zbrojson", "Kiyoon"]}
            title={"test"}
          >
            Kha i odizolowane cele
          </Conclusion>
        </section>
      </article>
    </div>
  );
};

export default Conclusions;
