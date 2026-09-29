export const notes = [
  {
    slug: "learning-has-a-cost",
    title: "Learning has a cost",
    summary:
      "Why a bandit demo should show opportunity cost, not just a winner.",
    lab: "bandits",
    sections: [
      [
        "Start with the decision",
        "A campaign allocator must choose where the next visitor goes before knowing which variant is best. Exploring a weaker variant can cost an expected conversion today while improving tomorrow’s choice. That is the trade-off this experiment makes visible.",
      ],
      [
        "Read the right metric",
        "The lab reports cumulative pseudo-regret: the sum of gaps between the best true conversion rate and the rate of each chosen arm. True rates are known because the world is simulated. This is not realised revenue loss and cannot simply be calculated from ordinary production logs.",
      ],
      [
        "Change the world before picking a winner",
        "Compare a clear winner, a close race and equal-rate arms. A policy that looks strong in one scenario may pay more to explore in another. Read the seed count and uncertainty description before interpreting the lines.",
      ],
      [
        "Where the demonstration ends",
        "The benchmark uses fixed rates and immediate feedback. A deployment would also need delayed outcomes, eligibility rules, holdouts and monitoring. Treat the demo as a way to ask sharper questions, not as evidence of client uplift.",
      ],
    ],
  },
  {
    slug: "comparison-before-complexity",
    title: "Comparison before complexity",
    summary: "An accurate model cannot rescue an unfair comparison.",
    lab: "causal-inference",
    sections: [
      [
        "Prediction is not intervention",
        "The people who receive an offer may already differ from those who do not. A difference in their outcomes mixes the effect of the offer with those pre-existing differences. More accurate prediction does not, by itself, identify what would happen if the offer changed.",
      ],
      [
        "Make the assumption visible",
        "The causal lab compares naive differences, regression adjustment and inverse-propensity weighting under randomized, observed-confounding and hidden-confounding scenarios. Synthetic outcomes supply a known effect against which estimates can be checked.",
      ],
      [
        "More data is not always the remedy",
        "Increase the sample size while leaving an important confounder hidden. Sampling noise can shrink without removing bias. Adjustment only helps under appropriate assumptions, including sufficient measured confounders and overlap.",
      ],
      [
        "Ask a better question",
        "Before choosing an estimator, specify the treatment, outcome, population and time window. Then ask what determines treatment assignment and what information is missing. The demo illustrates these failure modes; it is not validation of a particular causal software package.",
      ],
    ],
  },
  {
    slug: "demos-are-not-deployments",
    title: "A demo is not a deployment",
    summary:
      "A small release checklist for moving from an interesting result to a useful system.",
    lab: "ai-dlc",
    sections: [
      [
        "Define what ready means",
        "A convincing chart is not a release criterion. Write down what must work, who will use it, how failure will be noticed and how the release can be stopped or reversed.",
      ],
      [
        "Keep an evidence trail",
        "Record the dataset or fixture version, baseline, evaluation procedure and known limitations. Separate checks that actually ran from requirements that remain untested. A pass without provenance is difficult to reproduce.",
      ],
      [
        "Use explicit gates",
        "The readiness lab explores deterministic release gates with synthetic fixtures. It makes the relationship between missing evidence and a blocked release visible. It does not certify a real product or replace security and operational review.",
      ],
      [
        "Start small",
        "For a local demo, useful gates include runnable instructions, working controls, honest data labels and a repeatable test. A public production service needs more: access control where appropriate, observability, ownership, incident handling and recovery.",
      ],
    ],
  },
];
