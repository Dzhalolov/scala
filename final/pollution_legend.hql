select sensor_lat, sensor_long, avg(flag),
	count(flag), avg(work_day)
from (select *,
		case when max_value > avg_max
		then 1
		else 0
		end as flag
	from (select
			legend.sensor_id, sensor_type, sensor_lat,
			sensor_long, temp_1.max_value max_value,
			AVG(max_value) OVER (PARTITION BY sensor_type) avg_max,
			c_l.work_day
		from legend

JOIN
	(select 
	sensor_id, MAX(measurement) max_value
	from pollution GROUP BY sensor_id) temp_1
ON legend.sensor_id = temp_1.sensor_id
JOIN coord_legend c_l
ON c_l.sensor_id = legend.sensor_id) temp1) temp_2
GROUP BY sensor_lat, sensor_long
