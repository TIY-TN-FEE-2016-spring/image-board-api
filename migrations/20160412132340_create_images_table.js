
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`images`, (table) => {
    table.increments(`id`);
    table.string(`url`);
    table.string(`caption`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`images`);
};
