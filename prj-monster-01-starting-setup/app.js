function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      currentRound: 0,
      turnToAttack: "player",
      healthPlayer: 100,
      healthMonster: 100,
      battleLog: [],
      gameOver: false,
      winner: "",
    };
  },
  methods: {
    addLog(by, type, msg, value) {
      this.battleLog.unshift({
        by,
        type,
        msg,
        value,
      });
    },

    attack(attackBy) {
      const dmg = attackBy === "player" ? getRandomNum(5, 12) : getRandomNum(8, 15);

      if (attackBy === "player") this.healthMonster -= dmg;
      if (attackBy === "monster") {
        this.healthPlayer -= dmg;
        this.currentRound++;
      }

      this.turnToAttack = this.turnToAttack === "player" ? "monster" : "player";
      this.addLog(attackBy, "attack", "attacked and dealt", dmg);
    },

    specialAttack(attackBy) {
      const dmg = attackBy === "player" ? getRandomNum(10, 25) : getRandomNum(15, 30);

      if (attackBy === "player") this.healthMonster -= dmg;
      if (attackBy === "monster") {
        this.healthPlayer -= dmg;
        this.currentRound++;
      }

      this.turnToAttack = this.turnToAttack === "player" ? "monster" : "player";
      this.addLog(attackBy, "attack", "used special attack and dealt", dmg);
    },

    heal(healBy) {
      const heal = getRandomNum(5, 12);

      if (healBy === "player" && this.healthPlayer === 100) {
        this.turnToAttack = this.turnToAttack === "player" ? "monster" : "player";
        this.addLog(healBy, "heal", "healed, but it had no effect");
        return;
      }

      if (healBy === "monster" && this.healthMonster === 100) {
        this.turnToAttack = this.turnToAttack === "player" ? "monster" : "player";
        this.currentRound++;
        this.addLog(healBy, "heal", "healed, but it had no effect");
        return;
      }

      if (healBy === "player") this.healthPlayer + heal >= 100 ? (this.healthPlayer = 100) : (this.healthPlayer += heal);
      if (healBy === "monster") this.healthMonster + heal >= 100 ? (this.healthMonster = 100) : (this.healthMonster += heal);

      this.turnToAttack = this.turnToAttack === "player" ? "monster" : "player";
      this.addLog(healBy, "heal", "healed", heal);
    },

    surrender(surrenderBy) {
      if (surrenderBy === "player") this.winner = "monster";
      if (surrenderBy === "monster") this.winner = "player";

      this.gameOver = true;
      this.addLog(surrenderBy, "surrender", "surrendered");
    },
  },
  computed: {
    styleHealthPlayer() {
      return { width: `${this.healthPlayer}%` };
    },

    styleHealthMonster() {
      return { width: `${this.healthMonster}%` };
    },
  },
  watch: {
    healthPlayer() {
      if (this.healthPlayer < 0) {
        this.gameOver = true;
        this.winner = "monster";
      }
    },

    healthMonster() {
      if (this.healthMonster < 0) {
        this.gameOver = true;
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
