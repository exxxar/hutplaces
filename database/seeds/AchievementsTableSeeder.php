<?php

use App\Achievement;
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
        Achievement::create([
            'title'=>'achievements.title.ach1',
            'description'=>'achievements.description.ach1',
            'background'=>"vympel.png",
            'image'=>"ach-1.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::AchievementsCount,
            'trigger_value'=>'20',
            'discount'=>0,
            'exp'=>0,
            'coins'=>0,
            'money'=>0,
            'items_id'=>null,
            'cards_id'=>null,
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach2',
            'description'=>'achievements.description.ach2',
            'background'=>"vympel.png",
            'image'=>"ach-2.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::AchievementsCount,
            'trigger_value'=>'15',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach3',
            'description'=>'achievements.description.ach3',
            'background'=>"vympel.png",
            'image'=>"ach-3.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::AchievementsCount,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach4',
            'description'=>'achievements.description.ach4',
            'background'=>"vympel.png",
            'image'=>"ach-4.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::AchievementsCount,
            'trigger_value'=>'15',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach6',
            'description'=>'achievements.description.ach6',
            'background'=>"vympel.png",
            'image'=>"ach-6.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::SpentMoney,
            'trigger_value'=>'0.01',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach7',
            'description'=>'achievements.description.ach7',
            'background'=>"vympel.png",
            'image'=>"ach-7.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::CardsCount,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach8',
            'description'=>'achievements.description.ach8',
            'background'=>"vympel.png",
            'image'=>"ach-8.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::LoseSequenceCount,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach9',
            'description'=>'achievements.description.ach9',
            'background'=>"vympel.png",
            'image'=>"ach-9.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::PacksOpenedCount,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach10',
            'description'=>'achievements.description.ach10',
            'background'=>"vympel.png",
            'image'=>"ach-10.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::BugReportCount,
            'trigger_value'=>'10',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach11',
            'description'=>'achievements.description.ach11',
            'background'=>"vympel.png",
            'image'=>"ach-11.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::BugReportCount,
            'trigger_value'=>'20',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach12',
            'description'=>'achievements.description.ach12',
            'background'=>"vympel.png",
            'image'=>"ach-12.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::BugReportCount,
            'trigger_value'=>'50',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach13',
            'description'=>'achievements.description.ach13',
            'background'=>"vympel.png",
            'image'=>"ach-13.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::PromocodesCount,
            'trigger_value'=>'1',
        ]);

        Achievement::create([
            'title'=>'achievements.title.ach5.18',
            'description'=>'achievements.description.ach5.18',
            'background'=>"vympel.png",
            'image'=>"ach-5-18.png",
            'type'=>AchievementType::Frequent,
            'is_active'=>true,
            'random_rewards'=>true,
            'trigger_type'=>TriggerType::Level,
            'trigger_value'=>'2',
        ]);
    }
}
