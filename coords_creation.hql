CREATE EXTERNAL TABLE `coor`(                                          
   `sensor_id` int,                                                       
   `x0` double,                                            
   `y0` double,                                                    
   `x1` double,                                                   
   `y1` double,                                                   
   `x2` double,                                                           
   `y2` double,                                                   
   `x3` double,                                                   
   `y3` double,                                                   
   `x4` double,                                                   
   `y4` double
   )                                           
ROW FORMAT DELIMITED                                                      
   FIELDS TERMINATED BY ','                                                
STORED AS INPUTFORMAT                                                     
   'org.apache.hadoop.mapred.TextInputFormat'                              
OUTPUTFORMAT                                                              
   'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'            
LOCATION                                                                  
   'hdfs://sandbox-hdp.hortonworks.com:8020/user/maria_dev/coords' 