# Extreme Verification Latency


Python libaray for implementing extreme verification latency algorithms.

To run COMPOSE you will need to instantiate the COMPOSE class: 
reg_compose_QNS3VM = compose.COMPOSE(classifier="QN_S3VM", method="a_shape", verbose = 2,num_cores=0.8, selected_dataset='1CHT')
reg_compose_QNS3VM.run()

The following parameters need to be passed in: 
1. classifier : QN_S3VM or label_propagation 
2. method : type of clustering 'gmm' or 'a_shape'
    - gmm accounts for Fast COMPOSE
    - a_shape accounts for alpha shapes
3. num_cores: percent in which you wish to operate 0.8 = 80% of available cores 
4. selected dataset : options available :
    ['UG_2C_2D','MG_2C_2D','1CDT', '2CDT']

