// ===============================================================
//                     IMPORTACIONES
// ===============================================================
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// ===============================================================
//                     CONEXIÓN A MYSQL
// ===============================================================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sistema_escolar",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

// ===============================================================
//                 RUTA PRINCIPAL (TEST SERVER)
// ===============================================================
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente ✔️");
});

// ===============================================================
//                     MATRÍCULAS
// ===============================================================

// Listar matrículas
app.get("/matriculas", (req, res) => {
  db.query("SELECT * FROM matriculas", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// Generar código automático MAT-0001
app.get("/matriculas/codigo/nuevo", (req, res) => {
  const sql = "SELECT codigoMatricula FROM matriculas ORDER BY id DESC LIMIT 1";

  db.query(sql, (err, result) => {
    if (err) return res.json(err);

    let nuevoCodigo = "MAT-0001";

    if (result.length > 0) {
      let ultimo = result[0].codigoMatricula;
      let numero = parseInt(ultimo.split("-")[1]);
      numero++;
      nuevoCodigo = `MAT-${numero.toString().padStart(4, "0")}`;
    }

    res.json({ codigoMatricula: nuevoCodigo });
  });
});

// Registrar matrícula
app.post("/matriculas", (req, res) => {
  const d = req.body;

  const sql = `
    INSERT INTO matriculas (
      codigoMatricula, estudiante_id, dniEstudiante, grado, seccion, 
      fechaMatricula, anioEscolar, estado, apoderado, telefonoApoderado
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      d.codigoMatricula,
      d.estudiante_id,
      d.dniEstudiante,
      d.grado,
      d.seccion,
      d.fechaMatricula,
      d.anioEscolar,
      d.estado,
      d.apoderado,
      d.telefonoApoderado,
    ],
    (err) => {
      if (err) return res.json({ success: false, error: err });
      res.json({ success: true });
    }
  );
});

// Actualizar matrícula
app.put("/matriculas/:id", (req, res) => {
  const id = req.params.id;
  const d = req.body;

  const sql = `
    UPDATE matriculas SET
      codigoMatricula=?, estudiante_id=?, dniEstudiante=?, grado=?, seccion=?,
      fechaMatricula=?, anioEscolar=?, estado=?, apoderado=?, telefonoApoderado=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      d.codigoMatricula,
      d.estudiante_id,
      d.dniEstudiante,
      d.grado,
      d.seccion,
      d.fechaMatricula,
      d.anioEscolar,
      d.estado,
      d.apoderado,
      d.telefonoApoderado,
      id,
    ],
    (err) => {
      if (err) return res.json({ success: false, error: err });
      res.json({ success: true });
    }
  );
});

// Eliminar matrícula
app.delete("/matriculas/:id", (req, res) => {
  db.query(
    "DELETE FROM matriculas WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.json({ success: false, error: err });
      res.json({ success: true });
    }
  );
});

// ===============================================================
//                         ESTUDIANTES
// ===============================================================

// Listar todos los estudiantes
app.get("/estudiantes", (req, res) => {
  db.query("SELECT * FROM estudiantes", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// Obtener estudiante por ID (CORREGIDO ✔)
app.get("/estudiantes/:id", (req, res) => {
  db.query(
    "SELECT * FROM estudiantes WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.json({ success: false, error: err });

      if (result.length === 0)
        return res.json({ success: false, message: "Estudiante no encontrado" });

      res.json({
        success: true,
        data: result[0], // <-- CORRECTO, AHORA EL FRONT RECIBE BIEN
      });
    }
  );
});

// Registrar estudiante
app.post("/estudiantes", (req, res) => {
  const d = req.body;

  const sql = `
    INSERT INTO estudiantes (
      nombres, apellidos, dni, email, telefono, direccion, grado, seccion,
      nombrePadre, telefonoPadre, usuario, contrasena
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      d.nombres,
      d.apellidos,
      d.dni,
      d.email,
      d.telefono,
      d.direccion,
      d.grado,
      d.seccion,
      d.nombrePadre,
      d.telefonoPadre,
      d.usuario,
      d.contrasena,
    ],
    (err) => {
      if (err) return res.json({ success: false, error: err });
      res.json({ success: true });
    }
  );
});

// Actualizar estudiante
app.put("/estudiantes/:id", (req, res) => {
  const id = req.params.id;
  const d = req.body;

  const sql = `
    UPDATE estudiantes SET
      nombres=?, apellidos=?, dni=?, email=?, telefono=?, direccion=?, grado=?, 
      seccion=?, nombrePadre=?, telefonoPadre=?, usuario=?, contrasena=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      d.nombres,
      d.apellidos,
      d.dni,
      d.email,
      d.telefono,
      d.direccion,
      d.grado,
      d.seccion,
      d.nombrePadre,
      d.telefonoPadre,
      d.usuario,
      d.contrasena,
      id,
    ],
    (err) => {
      if (err) return res.json({ success: false, error: err });
      res.json({ success: true });
    }
  );
});

// Eliminar estudiante
app.delete("/estudiantes/:id", (req, res) => {
  db.query("DELETE FROM estudiantes WHERE id=?", [req.params.id], (err) => {
    if (err) return res.json({ success: false, error: err });
    res.json({ success: true });
  });
});

// ===============================================================
//                     LOGIN ADMINISTRATIVO
// ===============================================================
app.post("/login-admin", (req, res) => {
  const { usuario, password } = req.body;

  db.query(
    "SELECT * FROM administradores WHERE usuario = ? LIMIT 1",
    [usuario],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length === 0)
        return res.json({ success: false, message: "Usuario no existe" });

      const admin = result[0];

      if (admin.contrasena !== password)
        return res.json({ success: false, message: "Contraseña incorrecta" });

      res.json({
        success: true,
        message: "Login correcto",
        admin,
      });
    }
  );
});

// ===============================================================
//                     LOGIN ESTUDIANTE
// ===============================================================
app.post("/login-estudiante", (req, res) => {
  const { usuario, password } = req.body;

  db.query(
    "SELECT * FROM estudiantes WHERE usuario = ? LIMIT 1",
    [usuario],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length === 0)
        return res.json({ success: false, message: "Usuario no encontrado" });

      const alumno = result[0];

      if (alumno.contrasena !== password)
        return res.json({ success: false, message: "Contraseña incorrecta" });

      res.json({
        success: true,
        estudiante: alumno,
      });
    }
  );
});

// ===============================================================
//                     LOGIN DOCENTE
// ===============================================================
app.post("/login-docente", (req, res) => {
  const { usuario, password } = req.body;

  db.query(
    "SELECT * FROM docentes WHERE usuario = ? LIMIT 1",
    [usuario],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length === 0)
        return res.json({ success: false, message: "Usuario no encontrado" });

      const docente = result[0];

      if (docente.contrasena !== password)
        return res.json({ success: false, message: "Contraseña incorrecta" });

      res.json({
        success: true,
        docente,
      });
    }
  );
});

// ===============================================================
//                            DOCENTES
// ===============================================================
app.get("/docentes", (req, res) => {
  db.query("SELECT * FROM docentes", (err, result) => {
    if (err) return res.json({ success: false });
    res.json(result);
  });
});

app.get("/docentes/:id", (req, res) => {
  db.query(
    "SELECT * FROM docentes WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length === 0)
        return res.json({ success: false, message: "Docente no encontrado" });

      res.json({ success: true, data: result[0] });
    }
  );
});

app.post("/docentes", (req, res) => {
  const d = req.body;

  const sql = `
    INSERT INTO docentes 
    (nombres, apellidos, dni, email, telefono, direccion, especialidad, usuario, contrasena)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      d.nombres,
      d.apellidos,
      d.dni,
      d.email,
      d.telefono,
      d.direccion,
      d.especialidad,
      d.usuario,
      d.contrasena,
    ],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

app.put("/docentes/:id", (req, res) => {
  const id = req.params.id;
  const d = req.body;

  const sql = `
    UPDATE docentes SET
    nombres=?, apellidos=?, dni=?, email=?, telefono=?, direccion=?, 
    especialidad=?, usuario=?, contrasena=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      d.nombres,
      d.apellidos,
      d.dni,
      d.email,
      d.telefono,
      d.direccion,
      d.especialidad,
      d.usuario,
      d.contrasena,
      id,
    ],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

app.delete("/docentes/:id", (req, res) => {
  db.query("DELETE FROM docentes WHERE id=?", [req.params.id], (err) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

// ===============================================================
//                            CURSOS
// ===============================================================
app.get("/cursos", (req, res) => {
  const sql = `
    SELECT c.*, d.nombres AS docente_nombres, d.apellidos AS docente_apellidos
    FROM cursos c
    LEFT JOIN docentes d ON d.id = c.docente_id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.json({ success: false });
    res.json(result);
  });
});

app.get("/cursos/:id", (req, res) => {
  db.query(
    "SELECT * FROM cursos WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.json({ success: false });

      if (result.length === 0)
        return res.json({ success: false, message: "Curso no encontrado" });

      res.json({ success: true, data: result[0] });
    }
  );
});

app.post("/cursos", (req, res) => {
  const d = req.body;

  const sql = `
    INSERT INTO cursos
    (codigo, nombre, descripcion, grado, horas, docente_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [d.codigo, d.nombre, d.descripcion, d.grado, d.horas, d.docente_id || null],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

app.put("/cursos/:id", (req, res) => {
  const d = req.body;

  const sql = `
    UPDATE cursos SET 
    codigo=?, nombre=?, descripcion=?, grado=?, horas=?, docente_id=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      d.codigo,
      d.nombre,
      d.descripcion,
      d.grado,
      d.horas,
      d.docente_id || null,
      req.params.id,
    ],
    (err) => {
      if (err) return res.json({ success: false });
      res.json({ success: true });
    }
  );
});

app.delete("/cursos/:id", (req, res) => {
  db.query("DELETE FROM cursos WHERE id=?", [req.params.id], (err) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

// ===============================================================
//                    INICIAR SERVIDOR
// ===============================================================
app.listen(3001, () => {
  console.log("🚀 Servidor backend corriendo en http://localhost:3001");
});
// ===============================================
// ===============   CURSOS DOCENTE   ============
// ===============================================

// Obtener cursos asignados a un docente
app.get("/docente/:id/cursos", (req, res) => {
  const docenteId = req.params.id;

  const sql = `
    SELECT * FROM cursos
    WHERE docente_id = ?
  `;

  db.query(sql, [docenteId], (err, result) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true, cursos: result });
  });
});
app.get("/curso/:id/estudiantes", (req, res) => {
  const cursoId = req.params.id;

  const sql = `
    SELECT e.*
    FROM estudiantes e
    JOIN matriculas m ON m.estudiante_id = e.id
    WHERE m.curso_id = ?
  `;

  db.query(sql, [cursoId], (err, result) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true, estudiantes: result });
  });
});
app.post("/calificaciones", (req, res) => {
  const { estudiante_id, curso_id, trimestre, nota, fecha } = req.body;

  const sql = `
    INSERT INTO calificaciones (estudiante_id, curso_id, trimestre, nota, fecha)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [estudiante_id, curso_id, trimestre, nota, fecha], (err) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true });
  });
});
app.get("/docente/:id/calificaciones", (req, res) => {
  const docenteId = req.params.id;

  const sql = `
    SELECT c.*, e.nombres, e.apellidos, cu.nombre AS curso_nombre
    FROM calificaciones c
    JOIN estudiantes e ON e.id = c.estudiante_id
    JOIN cursos cu ON cu.id = c.curso_id
    WHERE cu.docente_id = ?
  `;

  db.query(sql, [docenteId], (err, result) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true, calificaciones: result });
  });
});
app.post("/asistencias", (req, res) => {
  const { estudiante_id, curso_id, fecha, estado } = req.body;

  const sql = `
    INSERT INTO asistencias (estudiante_id, curso_id, fecha, estado)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [estudiante_id, curso_id, fecha, estado], (err) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true });
  });
});
app.get("/curso/:id/asistencias", (req, res) => {
  const cursoId = req.params.id;

  const sql = `
    SELECT a.*, e.nombres, e.apellidos
    FROM asistencias a
    JOIN estudiantes e ON e.id = a.estudiante_id
    WHERE a.curso_id = ?
  `;

  db.query(sql, [cursoId], (err, result) => {
    if (err) return res.json({ success: false, error: err });

    res.json({ success: true, asistencias: result });
  });
});
app.get("/docente/:id", (req, res) => {
  const sql = "SELECT * FROM docentes WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.json({ success: false });

    res.json({ success: true, docente: result[0] });
  });
});

