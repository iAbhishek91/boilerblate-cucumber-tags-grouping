import cucumberTagGroups from 'cucumber-tags-grouping';

const test = async () => {
  const scenarioGroups = await cucumberTagGroups({
    featuresGlobPattern: 'features/**/*.feature',
    tagForGrouping: /SW/,
  });

  console.log(scenarioGroups);
};

test();
