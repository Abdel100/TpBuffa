let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
// la collection c'est "assignments" mais il y a une sorte de "matching"
// qui fait que si on fait une ou deux erreurs ça prend la premiere
// collection qui a le nom le plus proche...
module.exports = mongoose.model('Assignment', AssignmentSchema);
 