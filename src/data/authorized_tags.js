const userDefinedAuthorizedTags = {
	"Type/Focus:Literature Survey/Review": {
		"description": "Papers that perform a literature survey/review of XAI in healthcare"
	},
	"Type/Focus:Single XAI": {
		"description": "Papers that focus on one XAI technique"
	},
	"Type/Focus:Multiple XAI": {
		"description": "Papers that utilise multiple XAI techniques together"
	},
	"Type/Focus:Comparison of XAI": {
		"description": "Papers that compare XAI techniques for the same application"
	},
	"AI Used:VGG-16": {
		"description": "A convolutional neural network (CNN) for image classification, part of the series of VGGNet models"
	},
	"AI Used:Inception v3": {
		"description": "A convolutional neural network (CNN) for image classification"
	},
	"AI Used:Xception": {
		"description": "A convolutional neural network (CNN) for image classification, based on Inception v3"
	},
	"AI Used:VGG-19": {
		"description": "A convolutional neural network (CNN) for image classification, part of the series of VGGNet models"
	},
	"AI Used:DenseNet121": {
		"description": "A densely convolutional neural network (CNN) for image classification, part of the series of DenseNet models"
	},
	"AI Used:DenseNet169": {
		"description": "A densely convolutional neural network (CNN) for image classification, part of the series of DenseNet models"
	},
	"AI Used:BiLSTM": {
		"description": "Bidirectional Long Short-Term Memory models, recurrent neural networks for text classification"
	},
	"AI Used:MentalRoBERTa": {
		"description": "A transformer-based model initialised with RoBERTa-Base, based on the BERT and RoBERTa models, for text classification"
	},
	"AI Used:Multi task-fusion models": {
		"description": "Integrates the capabilities of individual models into a unified model"
	},
	"AI Used:SEResNeXt": {
		"description": "A convolutional neural network (CNN) based on the ResNeXt model"
	},
	"AI Used:Inception v2": {
		"description": "A convolutional neural network (CNN) for image classification"
	},
	"AI Used:ResNet": {
		"description": "A residual neural network for image classification"
	},
	"XAI Used:LIME": {
		"description": "Local Interpretable Model-agnostic Explanations (LIME) is a local model-angostic explainable AI method that provides an interpretation of the original model by approximating a new simple model"
	},
	"XAI Used:Saliency map": {
		"description": "Saliency maps are a local XAI technique generate heatmaps on images predicted by a deep learning network"
	},
	"XAI Used:GRAD-CAM": {
		"description": "Gradient-weighted Class Activation Map (GRAD-CAM), a variant of CAMs, that create an activation map, localisaing the decision-making features of an image"
	},
	"XAI Used:AGRAD": {
		"description": "Attention gradient (AGRAD) is a model-specific, self-explaining XAI method based on attention gradients"
	},
	"XAI Used:CLM": {
		"description": "Concept Localisation Map (CLM) is a perturbation-based concept localisation XAI method that highlights the regions connected with learning concepts, generating visual explanations"
	},
	"XAI Used:TCAV": {
		"description": "Testing with Concept Activation Vectors (TCAV) is a global XAI explanation for neural networks"
	},
	"XAI Used:LISA": {
		"description": "LISA is a suite of explainble AI methods including LIME (Local Interpretable Model-agnostic Explanations), integrated gradients, anchors, and SHAP (SHapley Additive exPlanations)"
	},
	"XAI Used:Integrated gradients": {
		"description": "Explainable AI technique that explains the relationship between a model's predictions in terms of its features"
	},
	"XAI Used:Anchors": {
		"description": "The anchors method is an explainable AI technique that explains individual predictions of a classification model by finding decision rules that "anchor" the prediction sufficiently"
	},
	"XAI Used:SHAP": {
		"description": "SHapley Additive exPlanations (SHAP) is a game theoretic explainable AI approach to explain the output of any machine learning model, connecting credit allocation with local explanations using Shapley values"
	},
	"XAI Used:Occlusion-based saliency": {
		"description": "A saliency map in which a small box is moved across a retrieved image to occlude parts of the image"
	},
	"XAI Used:Attention-based saliency": {
		"description": "A saliency map based on gradients to compute a form of similarity attention"
	},
	"XAI Used:Captum": {
		"description": "A explainable AI library based on integrated gradients"
	},
	"Application:Brain tumors": {
		"description": "Paper applied AI/XAI to detecting and classifying brain tumors"
	},
	"Application:Bone fractures": {
		"description": "Paper applied AI/XAI to detecting and classifying bone fractures"
	},
	"Application:Mental health diagnoses": {
		"description": "Paper applied AI/XAI to detecting and classifying mental health diagnoses"
	},
	"Application:Skin cancer": {
		"description": "Paper applied AI/XAI to detecting and classifying nevi (moles) and melanomas (skin cancers)"
	},
	"Application:COVID-19": {
		"description": "Paper applied AI/XAI to detecting and classifying COVID-19"
	},
	"Application:Polyps": {
		"description": "Paper applied AI/XAI to detecting and classifying polyps"
	},
	"Application:Breast cancer": {
		"description": "Paper applied AI/XAI to detecting and classifying breast cancer"
	},
	"Data Used:MRI": {
		"description": "Magnetic resonance imaging (MRI) is a type of body scan that uses magnetic fields to produce images of the inside of the body"
	},
	"Data Used:Photos": {
		"description": "Paper used photos or images for training of AI models"
	},
	"Data Used:X-Ray": {
		"description": "A form of electromagnetic radiation used to generate images of tissues and structures inside the body"
	},
	"Data Used:Textual": {
		"description": "Paper used textual data for training of AI models"
	},
	"Data Used:Social media posts": {
		"description": "Social media posts are a form of textual data posted on social media websites"
	},
	"Data Used:Ultrasound": {
		"description": "Ultrasound is an imaging technique that utilises sound waves to generate real-time pictures or video of soft tissues in the body"
	},
	"Data Used:Histological": {
		"description": "Histological photos are microscopic anatomy pictures of biological tissues"
	},
}