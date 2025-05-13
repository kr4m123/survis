define({
	authorizedTags: {
		"type/focus:literature_survey/review": {
			"description": "Papers that perform a literature survey/review of XAI in healthcare"
		},
		"type/focus:conceptual_(single_xai)": {
			"description": "Papers that focus on one XAI technique"
		},
		"type/focus:conceptual_(multiple_xai)": {
			"description": "Papers that utilise multiple XAI techniques together"
		},
		"type/focus:comparison_of_xai": {
			"description": "Papers that compare XAI techniques for the same application"
		},
		"type/focus:applied": {
			"description": "Papers that applied XAI to models used in the real world"
		},
		"ai_used:vgg-16": {
			"description": "A convolutional neural network (CNN) for image classification, part of the series of VGGNet models"
		},
		"ai_used:inception_v3": {
			"description": "A convolutional neural network (CNN) for image classification"
		},
		"ai_used:xception": {
			"description": "A convolutional neural network (CNN) for image classification, based on Inception v3"
		},
		"ai_used:vgg-19": {
			"description": "A convolutional neural network (CNN) for image classification, part of the series of VGGNet models"
		},
		"ai_used:densenet121": {
			"description": "A densely convolutional neural network (CNN) for image classification, part of the series of DenseNet models"
		},
		"ai_used:densenet169": {
			"description": "A densely convolutional neural network (CNN) for image classification, part of the series of DenseNet models"
		},
		"ai_used:bilstm": {
			"description": "Bidirectional Long Short-Term Memory models, recurrent neural networks for text classification"
		},
		"ai_used:mentalroberta": {
			"description": "A transformer-based model initialised with RoBERTa-Base, based on the BERT and RoBERTa models, for text classification"
		},
		"ai_used:multi_task-fusion_models": {
			"description": "Integrates the capabilities of individual models into a unified model"
		},
		"ai_used:seresnext": {
			"description": "A convolutional neural network (CNN) based on the ResNeXt model"
		},
		"ai_used:inception_v2": {
			"description": "A convolutional neural network (CNN) for image classification"
		},
		"ai_used:resnet": {
			"description": "A residual neural network for image classification"
		},
		"xai_used:lime": {
			"description": "Local Interpretable Model-agnostic Explanations (LIME) is a local model-angostic explainable AI method that provides an interpretation of the original model by approximating a new simple model"
		},
		"xai_used:saliency_map": {
			"description": "Saliency maps are a local XAI technique generate heatmaps on images predicted by a deep learning network"
		},
		"xai_used:textual": {
			"description": "Textual XAI techniques are user-friendly approaches that describe the output of a machine learning model through text"
		},
		"xai_used:grad-cam": {
			"description": "Gradient-weighted Class Activation Map (GRAD-CAM), a variant of CAMs, that create an activation map, localisaing the decision-making features of an image"
		},
		"xai_used:agrad": {
			"description": "Attention gradient (AGRAD) is a model-specific, self-explaining XAI method based on attention gradients"
		},
		"xai_used:clm": {
			"description": "Concept Localisation Map (CLM) is a perturbation-based concept localisation XAI method that highlights the regions connected with learning concepts, generating visual explanations"
		},
		"xai_used:tcav": {
			"description": "Testing with Concept Activation Vectors (TCAV) is a global XAI explanation for neural networks"
		},
		"xai_used:lisa": {
			"description": "LISA is a suite of explainble AI methods including LIME (Local Interpretable Model-agnostic Explanations), integrated gradients, anchors, and SHAP (SHapley Additive exPlanations)"
		},
		"xai_used:integrated_gradients": {
			"description": "Explainable AI technique that explains the relationship between a model's predictions in terms of its features"
		},
		"xai_used:anchors": {
			"description": "The anchors method is an explainable AI technique that explains individual predictions of a classification model by finding decision rules that \"anchor\" the prediction sufficiently"
		},
		"xai_used:shap": {
			"description": "SHapley Additive exPlanations (SHAP) is a game theoretic explainable AI approach to explain the output of any machine learning model, connecting credit allocation with local explanations using Shapley values"
		},
		"xai_used:occlusion_based_saliency": {
			"description": "A saliency map in which a small box is moved across a retrieved image to occlude parts of the image"
		},
		"xai_used:attention_based_saliency": {
			"description": "A saliency map based on gradients to compute a form of similarity attention"
		},
		"xai_used:captum": {
			"description": "A explainable AI library based on integrated gradients"
		},
		"xai_used:exaid": {
			"description": "A suite of explainable AI methods for AI models on dermatology. The suite includes textual, concept localisation maps, and testing with conceptual activation vectors methods"
		},
		"xai_used:cam": {
			"description": "Class activation mapping (CAM) is a XAI technique that outputs class-discriminative saliency maps for describing convolutional neural networks"
		},
		"application:brain_tumors": {
			"description": "Paper applied AI/XAI to detecting and classifying brain tumors"
		},
		"application:bone_fractures": {
			"description": "Paper applied AI/XAI to detecting and classifying bone fractures"
		},
		"application:mental_health_diagnoses": {
			"description": "Paper applied AI/XAI to detecting and classifying mental health diagnoses"
		},
		"application:skin_cancer": {
			"description": "Paper applied AI/XAI to detecting and classifying nevi (moles) and melanomas (skin cancers)"
		},
		"application:covid-19": {
			"description": "Paper applied AI/XAI to detecting and classifying COVID-19"
		},
		"application:polyps": {
			"description": "Paper applied AI/XAI to detecting and classifying polyps"
		},
		"application:breast_cancer": {
			"description": "Paper applied AI/XAI to detecting and classifying breast cancer"
		},
		"data_used:mri": {
			"description": "Magnetic resonance imaging (MRI) is a type of body scan that uses magnetic fields to produce images of the inside of the body"
		},
		"data_used:photos": {
			"description": "Paper used photos or images for training of AI models"
		},
		"data_used:x-ray": {
			"description": "A form of electromagnetic radiation used to generate images of tissues and structures inside the body"
		},
		"data_used:textual": {
			"description": "Paper used textual data for training of AI models"
		},
		"data_used:videos": {
			"description": "Paper used video data for training of AI models"
		},
		"data_used:social_media_posts": {
			"description": "Social media posts are a form of textual data posted on social media websites"
		},
		"data_used:ultrasound": {
			"description": "Ultrasound is an imaging technique that utilises sound waves to generate real-time pictures or video of soft tissues in the body"
		},
		"data_used:histological": {
			"description": "Histological photos are microscopic anatomy pictures of biological tissues"
		},
		"application:n/a": {
			"description": "Not applicable for this paper"
		},
		"ai_used:n/a": {
			"description": "Not applicable for this paper"
		},
		"xai_used:n/a": {
			"description": "Not applicable for this paper"
		},
		"data_used:n/a": {
			"description": "Not applicable for this paper"
		},
		"application:fetal_growth": {
			"description": "Paper applied AI/XAI to detecting and classifying fetal growth"
		},
		"xai_used:pcbm": {
			"description": "Progressive Concept Bottleneck Model (PCBM) is a deep learning intrinsically explainable model that provides two layers of explanation: visual feedback and property concepts"
		},
		"ai_used:pcbm": {
			"description": "Progressive Concept Bottleneck Model (PCBM) is a deep learning intrinsically explainable model that provides two layers of explanation: visual feedback and property concepts"
		}
	}
});
