<?php

use App\Achievement;
use App\Enums\AchievementCategoryType;
use App\Enums\AchievementType;
use App\Enums\TriggerType;
use Illuminate\Database\Seeder;

class AchievementsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //RANDOM BLOCK
        Achievement::create([
            'title'=>'achievements.title.ach1',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach1',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'1',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach2',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach2',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach3',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach3',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'20',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach4',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach4',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'50',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach5',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach5',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'100',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach6',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach6',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Played_Count,
            'trigger_value'=>'500',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach7',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach7',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Free_Played_Count,
            'trigger_value'=>'1',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach8',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach8',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Free_Played_Count,
            'trigger_value'=>'20',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach9',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach9',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Free_Played_Count,
            'trigger_value'=>'100',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach10',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach10',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Win_Count,
            'trigger_value'=>'1',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach11',
            'category'=> AchievementCategoryType::Randoms,
            'description'=>'achievements.description.ach11',
            'background'=>"vympel.png",
            'image'=>"ach-1000.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Randoms_Win_Count,
            'trigger_value'=>'5',
        ]);


    }
}
