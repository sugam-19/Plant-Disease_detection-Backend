'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PlantDiseases', [
      {
        name: 'Apple___Apple_scab',
        symptoms: 'Olive-green to brown lesions on leaves, fruit, and twigs. The fruit may become misshapen or cracked.',
        prevention: 'Apply fungicides in early spring, prune trees to improve air circulation, and choose scab-resistant varieties.',
        cause: 'Fungus (Venturia inaequalis)',
        effect: 'Reduced fruit quality and yield, leading to economic losses.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple___Black_rot',
        symptoms: 'Dark, sunken lesions on fruit and bark. Leaves may develop circular, brown spots with a purple border.',
        prevention: 'Remove infected branches and fruit, apply fungicides during the growing season, and improve air circulation.',
        cause: 'Fungus (Botryosphaeria obtusa)',
        effect: 'Significant fruit loss and decline in tree health.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple___Cedar_apple_rust',
        symptoms: 'Yellow-orange spots on leaves that turn into red lesions. Fruits may also be infected.',
        prevention: 'Plant rust-resistant varieties, remove nearby cedar trees, and apply fungicides in early spring.',
        cause: 'Fungus (Gymnosporangium juniperi-virginianae)',
        effect: 'Premature leaf drop and reduced fruit production.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Maintain proper orchard hygiene, water properly, and ensure good soil nutrition.',
        cause: 'N/A',
        effect: 'Healthy apple tree with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blueberry___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Regularly prune, maintain proper water levels, and ensure good soil nutrition.',
        cause: 'N/A',
        effect: 'Healthy blueberry plant with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cherry_(including_sour)___Powdery_mildew',
        symptoms: 'White, powdery spots on leaves, which may curl or drop prematurely.',
        prevention: 'Prune to improve airflow, apply fungicides, and remove infected plant material.',
        cause: 'Fungus (Podosphaera clandestina)',
        effect: 'Reduced photosynthesis and yield; stunted growth in severe cases.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cherry_(including_sour)___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Proper pruning, adequate watering, and good soil nutrition.',
        cause: 'N/A',
        effect: 'Healthy cherry tree with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
        symptoms: 'Gray to tan lesions on leaves, which can merge and kill entire leaf tissue.',
        prevention: 'Rotate crops, plant resistant hybrids, and apply fungicides as needed.',
        cause: 'Fungus (Cercospora zeae-maydis)',
        effect: 'Reduced photosynthesis, lower crop yields.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corn_(maize)___Common_rust_',
        symptoms: 'Reddish-brown pustules on leaves that can merge, causing leaves to wither.',
        prevention: 'Plant rust-resistant hybrids and apply fungicides if necessary.',
        cause: 'Fungus (Puccinia sorghi)',
        effect: 'Reduced photosynthesis and yield loss.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corn_(maize)___Northern_Leaf_Blight',
        symptoms: 'Gray to tan, elliptical lesions on leaves that may kill tissue.',
        prevention: 'Rotate crops, plant resistant hybrids, and apply fungicides.',
        cause: 'Fungus (Setosphaeria turcica)',
        effect: 'Decreased photosynthesis and yield loss.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Corn_(maize)___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Maintain good crop rotation, use resistant varieties, and control pests.',
        cause: 'N/A',
        effect: 'Healthy corn crop with optimal yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grape___Black_rot',
        symptoms: 'Dark, circular lesions on leaves and fruit; infected berries turn black and shrivel.',
        prevention: 'Prune infected material, apply fungicides, and ensure good airflow.',
        cause: 'Fungus (Guignardia bidwellii)',
        effect: 'Significant fruit loss and yield reduction.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grape___Esca_(Black_Measles)',
        symptoms: 'Dark, sunken lesions on leaves; berries may become shriveled or split.',
        prevention: 'Prune affected vines and apply fungicides; avoid wounds on vines.',
        cause: 'Fungus (Phaeoacremonium aleophilum)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
        symptoms: 'Brown or black angular spots on leaves that may coalesce.',
        prevention: 'Improve airflow through pruning, remove infected leaves, and apply fungicides.',
        cause: 'Fungus (Pseudopezicula tracheiphila)',
        effect: 'Reduced photosynthesis and yield loss.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grape___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Proper vineyard management, including pruning and disease monitoring.',
        cause: 'N/A',
        effect: 'Healthy grapevine with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orange___Haunglongbing_(Citrus_greening)',
        symptoms: 'Yellowing leaves, misshapen fruit, and stunted tree growth.',
        prevention: 'Control insect vectors, remove infected trees, and plant resistant varieties.',
        cause: 'Bacterium (Candidatus Liberibacter spp.)',
        effect: 'Significant yield loss and tree decline.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peach___Bacterial_spot',
        symptoms: 'Small, water-soaked spots on leaves and fruit, leading to defoliation.',
        prevention: 'Plant resistant varieties, apply bactericides, and remove infected plant material.',
        cause: 'Bacterium (Xanthomonas campestris pv. pruni)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Peach___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Proper orchard management, including pruning and disease monitoring.',
        cause: 'N/A',
        effect: 'Healthy peach tree with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepper,_bell___Bacterial_spot',
        symptoms: 'Water-soaked lesions on leaves and fruit that may turn brown.',
        prevention: 'Use disease-free seeds, plant resistant varieties, and apply bactericides.',
        cause: 'Bacterium (Xanthomonas campestris pv. vesicatoria)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pepper,_bell___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Use proper spacing and ensure good soil health.',
        cause: 'N/A',
        effect: 'Healthy pepper plant with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potato___Early_blight',
        symptoms: 'Brown, concentric lesions on leaves and stems that may cause defoliation.',
        prevention: 'Rotate crops, plant resistant varieties, and apply fungicides.',
        cause: 'Fungus (Alternaria solani)',
        effect: 'Reduced tuber quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potato___Late_blight',
        symptoms: 'Water-soaked lesions on leaves that turn brown and cause rot in tubers.',
        prevention: 'Rotate crops, plant resistant varieties, and apply fungicides.',
        cause: 'Fungus (Phytophthora infestans)',
        effect: 'Significant crop loss and economic damage.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potato___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Use proper crop rotation and plant health practices.',
        cause: 'N/A',
        effect: 'Healthy potato crop with optimal yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Strawberry___Leaf_scorch',
        symptoms: 'Dark spots on leaves with reddish-purple borders, leading to leaf drop.',
        prevention: 'Improve air circulation, remove infected leaves, and apply fungicides as needed.',
        cause: 'Fungus (Diplocarpon earlianum)',
        effect: 'Reduced photosynthesis and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Strawberry___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Maintain proper watering and fertilization.',
        cause: 'N/A',
        effect: 'Healthy strawberry plant with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Bacterial_spot',
        symptoms: 'Water-soaked spots on leaves and fruit that turn brown.',
        prevention: 'Use disease-free seeds, apply copper-based bactericides, and rotate crops.',
        cause: 'Bacterium (Xanthomonas campestris pv. vesicatoria)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Early_blight',
        symptoms: 'Brown spots on leaves with a concentric ring pattern, causing defoliation.',
        prevention: 'Rotate crops, plant resistant varieties, and apply fungicides.',
        cause: 'Fungus (Alternaria solani)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Late_blight',
        symptoms: 'Water-soaked spots on leaves that turn brown and cause rot in fruit.',
        prevention: 'Rotate crops, plant resistant varieties, and apply fungicides.',
        cause: 'Fungus (Phytophthora infestans)',
        effect: 'Significant crop loss and economic damage.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Leaf_Mold',
        symptoms: 'Yellow spots on upper leaf surfaces with olive-green mold on undersides.',
        prevention: 'Improve air circulation, apply fungicides, and remove infected leaves.',
        cause: 'Fungus (Passalora fulva)',
        effect: 'Reduced photosynthesis and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Septoria_leaf_spot',
        symptoms: 'Small, circular spots on leaves that cause defoliation.',
        prevention: 'Rotate crops, apply fungicides, and remove infected leaves.',
        cause: 'Fungus (Septoria lycopersici)',
        effect: 'Reduced photosynthesis and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Spider_mites Two-spotted_spider_mite',
        symptoms: 'Small, white or yellow spots on leaves, which may turn bronze or fall off.',
        prevention: 'Apply miticides, encourage natural predators, and use neem oil.',
        cause: 'Insect (Tetranychus urticae)',
        effect: 'Reduced plant vigor and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Target_Spot',
        symptoms: 'Brown lesions with concentric rings on leaves and fruit.',
        prevention: 'Apply fungicides, remove infected leaves, and improve air circulation.',
        cause: 'Fungus (Corynespora cassiicola)',
        effect: 'Reduced fruit quality and yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        symptoms: 'Yellowing leaves that curl upward, stunted growth, and poor fruit set.',
        prevention: 'Use virus-resistant varieties and control whitefly populations.',
        cause: 'Virus (Begomovirus)',
        effect: 'Severely reduced fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___Tomato_mosaic_virus',
        symptoms: 'Mottled, yellow leaves and stunted growth.',
        prevention: 'Use virus-free seeds, control aphids, and disinfect tools.',
        cause: 'Virus (Tobamovirus)',
        effect: 'Reduced yield and poor fruit quality.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tomato___healthy',
        symptoms: 'No symptoms; the plant is healthy.',
        prevention: 'Maintain proper watering and fertilization.',
        cause: 'N/A',
        effect: 'Healthy tomato plant with optimal fruit yield.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PlantDiseases', null, {});
  }
};
