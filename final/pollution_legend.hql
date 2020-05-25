select
	legend.sensor_id, sensor_type, sensor_lat,
	sensor_long, temp_1.mean_value,
	AVG(mean_value) OVER (PARTITION BY sensor_type)
from legend

JOIN 
	(select 
	sensor_id, AVG(measurement) mean_value
	from pollution GROUP BY sensor_id) temp_1
ON legend.sensor_id = temp_1.sensor_id;
