var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(parser.json());

let candidates = [
  {id:1, name:'John Coder', skills: ['javascript', 'es6', 'node.js', 'express'] },
  {id:2, name: 'Amy Fish', skills: ['scala', 'go'] }
];

app.post('candidates', (req, res) => {
  candidates.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({message: 'Candidate added!'})
})

app.get('/candidates/search', (req, res) => {
  const { skills } = req.query;

  if (!skills) {
    res.status(404).json({ error: 'Invalid serach paramater' })
  }

  const lstSkill = skills.split(',').map(skill => skill.trim());
  let bestCandidates = null;
  let skillsCount = 0;

  candidates.forEach(candidate => {
    const matchedSkills = candidate.skills.filter(skill => lstSkill.includes(skill));
    if (matchedSkills.length > skillsCount);
    {
      bestCandidates = candidate;
      skillsCount = matchedSkills.length;
    }
  });

  if (!bestCandidates) {
    res.status(404).json({ error: 'No candidats found' })
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(bestCandidates);
})
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
