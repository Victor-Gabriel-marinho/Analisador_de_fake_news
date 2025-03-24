import {db} from "../db.js";

export const criar_usu = (req,res) => {
    const q = "INSERT INTO usuarios (`nome`,`email`,`senha`) VALUES(?)";
    const dados =[
        req.body.nome,
        req.body.email,
        req.body.senha,
    ];

    db.query(q, [dados], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("usuario criado com sucesso")
    });
};

export const pegar_usu = (_,res) => {
    const q = "SELECT * FROM usuarios"

    db.query(q, (data,err) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    })
};