export const json = {
  "title": "Do You Love It - Career Pathing Index",
  "pages": [
    {
      "name": "intro",
      "elements": [
        {
          "type": "html",
          "name": "instructions",
          "html": "<p>Do You Love It Career Pathing Index<br/>You say you like it—but how much do you actually like it? For this exercise, think of your current or desired role. When prompted for ‘it’, answer how you feel about this work.</p>"
        }
      ]
    },
    {
      "name": "day1",
      "elements": [
        {
          "type": "comment",
          "name": "perfectDay",
          "title": "Describe your perfect day",
          "description": "Think of activities, locations, meals, people, etc. Break into 30min–4h blocks over 16h, from your ideal wake-up.",
          "isRequired": true
        }
      ]
    },
    {
      "name": "day_q1",
      "elements": [
        {
          "type": "html",
          "name": "showPerfectDay1",
          "html": "<p><strong>Your perfect day:</strong> {perfectDay}</p>"
        },
        {
          "type": "radiogroup",
          "name": "q1",
          "title": "Did your perfect day include working on \"it\"? If so, how much?",
          "choices": [
            {
              "value": 0,
              "text": "No"
            },
            {
              "value": 3,
              "text": "30 minutes"
            },
            {
              "value": 4,
              "text": "1 hour"
            },
            {
              "value": 5,
              "text": "90+ minutes"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q2",
          "title": "Compared to 1 hour of a show you like, how does this work feel?",
          "choices": [
            {
              "value": 3,
              "text": "Same"
            },
            {
              "value": 2,
              "text": "Somewhat longer"
            },
            {
              "value": 1,
              "text": "Considerably longer"
            },
            {
              "value": 4,
              "text": "Somewhat shorter"
            },
            {
              "value": 5,
              "text": "Considerably shorter"
            }
          ]
        }
      ]
    },
    {
      "name": "q3-5",
      "elements": [
        {
          "type": "rating",
          "name": "q3",
          "title": "What’s your energy level when you start the work (within the first 5 minutes) on a scale of 1 to 10 where 1 is lethargic and unfocused and 10 is highly energetic and focused.",
          "rateCount": 10,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "q4",
          "title": "What’s your energy level when you’re halfway through your work?",
          "rateCount": 10,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "q5",
          "title": "What’s your energy level when you’re done?",
          "rateCount": 10,
          "rateMax": 10
        }
      ]
    },
    {
      "name": "q6-7",
      "elements": [
        {
          "type": "html",
          "name": "plane_card",
          "html": "<div style=\"border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; margin-bottom:16px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\"><h4 style=\"margin-top:0;\"></h4><p>You’re working on ‘it’ on a plane and the captain says you’ll be landing in 30 minutes.</p><p style=\"font-size:0.9em; color:#555;\"></p></div>"
        },
        {
          "type": "radiogroup",
          "name": "q6",
          "title": "How do you feel that you need to stop working on it?",
          "choices": [
            {
              "value": 0,
              "text": "Pretty Happy, I was wrapping up anyhow"
            },
            {
              "value": 1,
              "text": "I’m good with it, I needed a break"
            },
            {
              "value": 2,
              "text": "Neither good nor bad, it is what it is"
            },
            {
              "value": 3,
              "text": "I’m a little upset, I was in a flow and feeling accomplished"
            },
            {
              "value": 4,
              "text": "I’m disappointed, I wanted to get more done"
            },
            {
              "value": 5,
              "text": "I’m really upset—there’s so much more I want to do"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q7",
          "title": "You’re down to your last 5 minutes before having to shut down your computer, do you:",
          "choices": [
            {
              "value": 3,
              "text": "Keep working at the same pace"
            },
            {
              "value": 5,
              "text": "Work substantially faster"
            },
            {
              "value": 4,
              "text": "Work somewhat faster"
            },
            {
              "value": 2,
              "text": "Work somewhat slower"
            },
            {
              "value": 1,
              "text": "Work substantially slower"
            },
            {
              "value": 0,
              "text": "Stop Working Altogether"
            }
          ]
        }
      ]
    },
    {
      "name": "page_q8",
      "elements": [
        {
          "type": "html",
          "name": "researcher_card",
          "html": "<div style=\"border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; margin-bottom:16px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\"><h4 style=\"margin-top:0;\"></h4><p>Two researchers approach you. One study involves 5 hours on your top‐choice topic. The other connects to something you like (e.g. your college minor). Both pay $50/hour, but researcher #2 will pay more.</p><p style=\"font-size:0.9em; color:#555;\"><em>Assume full-time employment, financial comfort, and that this takes place on a free Saturday.</em></p></div>"
        },
        {
          "type": "radiogroup",
          "name": "q8",
          "title": "At what extra pay would you switch?",
          "choices": [
            {
              "value": 0,
              "text": "$60/hour"
            },
            {
              "value": 1,
              "text": "$75/hour"
            },
            {
              "value": 2,
              "text": "$100/hour"
            },
            {
              "value": 3,
              "text": "$150/hour"
            },
            {
              "value": 4,
              "text": "$200/hour"
            },
            {
              "value": 5,
              "text": "None of the above"
            }
          ]
        }
      ]
    },
    {
      "name": "page_q9",
      "elements": [
        {
          "type": "html",
          "name": "researcher_card1",
          "html": "<div style=\"border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; margin-bottom:16px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\"><h4 style=\"margin-top:0;\"></h4><p>Two researchers approach you. One study involves 5 hours on your top‐choice topic. The other connects to something you like (e.g. your college minor). Both pay $50/hour, but researcher #2 will pay more.</p><p style=\"font-size:0.9em; color:#555;\"><em>Assume full-time employment, financial comfort, and that this takes place on a free Saturday.</em></p></div>"
        },
        {
          "type": "rating",
          "name": "q9a",
          "title": " How distractable are you overall?",
          "description": "1–10 scale: 1=<2 min, 5=every 10 min, 10=once per 60 min",
          "rateCount": 10,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "q9b",
          "title": "How distractable are you while working on this topic?",
          "description": "Same 1–10 scale, refer to last 1 h session",
          "rateCount": 10,
          "rateMax": 10
        }
      ]
    },
    {
      "name": "page_q10",
      "elements": [
        {
          "type": "radiogroup",
          "name": "q10",
          "title": "Is your self-talk while working on \"it\":",
          "choices": [
            {
              "value": 2,
              "text": "Doubting & Concerned"
            },
            {
              "value": 1,
              "text": "Anxious/Frustrated"
            },
            {
              "value": 0,
              "text": "Distracted/Incoherent"
            },
            {
              "value": 3,
              "text": "Positive/Helpful"
            },
            {
              "value": 4,
              "text": "Confident & Excited"
            },
            {
              "value": 5,
              "text": "Enlightened & Zen"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "q11",
          "title": "Are your thoughts when doing the work centered on:",
          "choices": [
            {
              "value": 0,
              "text": "How you wish you didn’t have to be doing this right now"
            },
            {
              "value": 4,
              "text": "The present moment of the work itself"
            },
            {
              "value": 1,
              "text": "The work’s upcoming completion"
            },
            {
              "value": 2,
              "text": "Within the near future, 1–3 months"
            },
            {
              "value": 3,
              "text": "In the intermediate future, 3–18 months"
            },
            {
              "value": 5,
              "text": "In the distant future, 19+ months"
            }
          ]
        }
      ]
    },
    {
      "name": "q11-13",
      "elements": [
        {
          "type": "radiogroup",
          "name": "q12",
          "title": "If independently wealthy, how many hours/week would you spend on this endeavor?",
          "choices": [
            {
              "value": 0,
              "text": "Less than 10 hours"
            },
            {
              "value": 1,
              "text": "10–20 hours"
            },
            {
              "value": 2,
              "text": "20–30 hours"
            },
            {
              "value": 3,
              "text": "30–40 hours"
            },
            {
              "value": 4,
              "text": "40–50 hours"
            },
            {
              "value": 5,
              "text": "50+ hours"
            }
          ]
        }
      ]
    },
    {
      "name": "q13-15",
      "elements": [
        {
          "type": "rating",
          "name": "q13",
          "title": "On a scale of 1 to 10, how enjoyable is the work grind?",
          "rateCount": 10,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "q14",
          "title": "On a scale of 1 to 10, how meaningful and purposeful does the work feel?",
          "rateCount": 10,
          "rateMax": 10
        },
        {
          "type": "rating",
          "name": "q15",
          "title": "On a scale of 1 to 10, how fulfilling & legacy-building is the work to you?",
          "rateCount": 10,
          "rateMax": 10
        }
      ]
    },
    {
      "name": "results",
      "elements": [
        {
          "type": "expression",
          "name": "totalScore",
          "title": "Your Total Score:",
          "expression": "{q1}+{q2}+{q6}+{q7}+{q8}+iif({q9b}-{q9a}<0,0,min({q9b}-{q9a}+1,5))+{q10}+{q11}+{q12}+iif({q3}>2,({q3}-({q3}%2))/2,0)+iif({q4}>2,({q4}-({q4}%2))/2,0)+iif({q5}>2,({q5}-({q5}%2))/2,0)+iif({q13}>2,({q13}-({q13}%2))/2,0)+iif({q14}>2,({q14}-({q14}%2))/2,0)+iif({q15}>2,({q15}-({q15}%2))/2,0)"
        },
        {
          "type": "expression",
          "name": "lpa",
          "title": "Loveability Point Average (LPA):",
          "expression": "round({totalScore} / 15, 2)"
        },
        {
          "type": "html",
          "name": "feedback",
          "html": "<h4>Interpretation</h4><ul><li><strong>0–15</strong>: Reconsider</li><li><strong>15–35</strong>: Job</li><li><strong>35–55</strong>: Career</li><li><strong>55–75</strong>: Calling</li></ul>"
        }
      ]
    }
  ],
  "showQuestionNumbers": "on",
  "showProgressBar": true,
  "progressBarLocation": "top",
  "autoAdvanceEnabled": true,
  "startSurveyText": "Start",
  "firstPageIsStartPage": true
}